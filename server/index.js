const fastify = require('fastify')()
const fastifyPlugin = require('fastify-plugin')
const routes = require('./routes')
const { Client } = require('pg')

const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  database: 'items'
})

async function dbconnector(fastify, options) {
  try {
    await client.connect()
    console.log("db connected succesfully")
    fastify.decorate('db', { client })
  } catch (err) {
    console.error(err)
  }
}

fastify.register(fastifyPlugin(dbconnector))
fastify.register(routes)

//launching server at port : 3000 in local environment
async function start() {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`server running at ${fastify.server.address().port}`)
}

start()