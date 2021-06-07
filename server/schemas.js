exports.allItems = {
  response: {
    200: {
      type: 'array',
      required: ['id', 'name', 'createdAt'],
      properties: {
        id: { type: 'string', format: 'uuid' },
        name: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' }
      }
    }
  }
}

exports.addItem = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: { type: 'string', }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        created: { type: 'boolean' }
      }
    }
  }
}

exports.updateItem = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: { type: 'string' }
    }
  },
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', format: 'uuid' }
    }
  },
  reponse: {
    200: {
      type: 'object',
      properties: {
        updated: { type: 'boolean' }
      }
    }
  }
}

exports.deleteItem = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', format: 'uuid' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        deleted: { type: 'boolean' }
      }
    }
  }
}