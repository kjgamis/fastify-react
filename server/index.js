const fastify = require('fastify')({ logger: { prettyPrint: true } })
const fastifyPlugin = require('fastify-plugin')
const fastifyStatic = require('fastify-static')
const fastifySwagger = require('fastify-swagger')
const path = require('path')
const swaggerOptions = require('./swagger')
const routes = require('./routes')
const client = require('./dbClient')

const dbconnector = async (fastify, options) => {
  client.connect()
  console.log("db connected succesfully")
  fastify.decorate('client', client)
}

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'dist'),
})
fastify.register(routes)
fastify.register(fastifyPlugin(dbconnector))
fastify.register(fastifySwagger, swaggerOptions)

//launching server at port : 3000 in local environment
fastify.listen(3000, (error) => {
  if (error) {
    fastify.log.error(error)
    return process.exit(1)
  }
  fastify.swagger()
  console.info(`Please visit http://localhost:${fastify.server.address().port}`)
})
