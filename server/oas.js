const controller = require('./controller')
const { allItems, addItem, updateItem, deleteItem } = require('./schemas')

const spec = {
  "info": {
    "title": "API Title",
    "version": "1.0"
  },
  "servers": [
    { "url": "http://localhost:3000/documentation" }
  ],
  "paths": {
    "/items": {
      "get": {
        "summary": "Returns a list of items",
        "operationId": "fetchItems",
      },
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/paths/~1{item_id}~1"
                }
              }
            }
          }
        }
      }
    },
    "/items": {
      "post": {
        "summary": "Adds an item",
        "operationId": "addItem"
      }
    },
    "/items/:id": {
      "patch": {
        "summary": "Updates an item",
        "operationId": "updateItem"
      }
    },
    "/items/:id": {
      "delete": {
        "summary": "Deletes an item",
        "operationId": "deleteItem"
      }
    }
  }
}

spec.$id = '$'

const swaggerOptions = {
  spec,
  handler: controller
}