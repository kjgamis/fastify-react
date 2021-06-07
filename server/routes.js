const controller = require('./controller')
const { allItems, addItem, updateItem, deleteItem } = require('./schemas')

const routes = async (fastify, options) => {
  fastify.get('/', async (request, reply) => {
    reply.sendFile('index.html')
  })
  fastify.get('/items', { schema: allItems }, controller.fetchItems)
  fastify.post('/items', { schema: addItem }, controller.addItem)
  fastify.patch('/items/:id', { schema: updateItem }, controller.updateItem)
  fastify.delete('/items/:id', { schema: deleteItem }, controller.deleteItem)
}

module.exports = routes