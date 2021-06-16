const { v4: uuidv4 } = require('uuid')
const client = require('../dbClient')

const controller = {

  fetchItems: async (request, reply) => {
    const query = 'SELECT * FROM todos'

    const { rows } = await client.query(query)
    return reply.send(rows)

  },

  addItem: async (request, reply) => {
    const { name } = request.body
    const id = uuidv4()
    const createdAt = new Date().toISOString()
    const query = {
      text: `INSERT INTO todos (id, name, "createdAt") VALUES ($1, $2, $3) RETURNING *`,
      values: [id, name, createdAt]
    }

    const { rows } = await client.query(query)
    console.log(rows)
    return reply.send({ status: "success", body: rows[0] })

  },

  updateItem: async (request, reply) => {
    const id = request.params.id
    const { name } = request.body
    const query = {
      text: `UPDATE todos SET name = $2 WHERE id = $1 RETURNING *`,
      values: [id, name]
    }

    const { rows } = await client.query(query)
    console.log(rows)
    return reply.send({ status: "success", body: rows[0] })

  },

  deleteItem: async (request, reply) => {
    const id = request.params.id
    const query = {
      text: `DELETE FROM todos WHERE id = $1 RETURNING *`,
      values: [id]
    }

    const { rows } = await client.query(query)
    console.log(rows)
    return reply.send({ status: "success", body: rows[0] })

  }
}

module.exports = controller