const { Client } = require('pg')

module.exports = new Client({
  host: '127.0.0.1',
  port: 5432,
  database: 'todos'
})