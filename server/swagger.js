const swaggerOptions = {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Fastify CRUD API',
      description: 'Fastify API with Postges database',
      version: '0.1.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    // Model Header
    definitions: {
      Items: {
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' }
        }
      }
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  exposeRoute: true
}

module.exports = swaggerOptions