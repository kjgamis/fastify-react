const { v4: uuidv4 } = require('uuid')
const client = require('./dbClient')

const controller = {

  fetchItems: async (request, reply) => {
    client.query('SELECT * FROM todos', (error, results) => {
      if (error) throw new Error(error)
      reply.status(200).send(results.rows)
    })
  },

  addItem: async (request, reply) => {
    const { name } = request.body
    const id = uuidv4()
    const createdAt = new Date().toISOString()
    const query = {
      text: `INSERT INTO todos (id, name, "createdAt") VALUES ($1, $2, $3) RETURNING *`,
      values: [id, name, createdAt]
    }

    client.query(query, (error, results) => {
      if (error) throw new Error(error)
      console.log(results.rows)
      reply.status(200).send({ created: true })
    })
  },

  updateItem: async (request, reply) => {
    const id = request.params.id
    const { name } = request.body
    const query = {
      text: `UPDATE todos SET name = $2 WHERE id = $1 RETURNING *`,
      values: [id, name]
    }
    client.query(query, (error, results) => {
      if (error) throw new Error(error)
      console.log(results.rows)
      reply.status(200).send({ updated: true })
    })
  },

  deleteItem: async (request, reply) => {
    const id = request.params.id
    const query = {
      text: `DELETE FROM todos WHERE id = $1 RETURNING *`,
      values: [id]
    }
    client.query(query, (error, results) => {
      if (error) throw new Error(error)
      console.log(results.rows)
      reply.status(200).send({ deleted: true })
    })
  }
}

module.exports = controller