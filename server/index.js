const fastify = require('fastify')()
const path = require('path')

//handles GET / request
fastify.get('/', async (request, reply) => {
  try {
    return { message: "hello, world!" }
  }
  catch (e) { console.log(e) }
})

//launching server at port : 3000 in local environment
fastify.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`server running at ${fastify.server.address().port}`)
})