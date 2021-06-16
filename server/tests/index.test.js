const { test } = require('tap')
const fastify = require('../index')

test('requests the "/items" GET route', async t => {
  t.plan(1)
  // t.teardown(() => fastify.close())
  const response = await fastify.inject({
    method: 'GET',
    url: '/',
  })
  t.equal(response.statusCode, 200, 'returns a status code of 200')
})

test('requests the "/" POST route', async t => {
  t.plan(1)
  // t.teardown(() => fastify.close())
  const response = await fastify.inject({
    method: 'POST',
    url: '/items',
    body: { name: "food" }
  })

  // console.log(response)

  t.equal(response.statusCode, 200, 'returns a status code of 200')
  // t.same(response.body, {
  //   "status": "success",
  //   "body": {
  //     "id": "1d4420b3-fd3b-468f-bf04-4f5e45dd9fb2",
  //     "name": "food",
  //     "createdAt": "2021-06-15T03:12:44.983Z"
  //   }
  // })
})

test('requests the "items/:id" PATCH route', async t => {
  t.plan(1)
  // t.teardown(() => fastify.close())
  const uuid = 'f8c27d4e-d7ae-4335-9da5-1c9756ebcd1c'
  const response = await fastify.inject({
    method: 'PATCH',
    url: `/items/${uuid}`,
    body: { name: "food" }
  })

  // console.log(response)

  t.equal(response.statusCode, 200, 'returns a status code of 200')
  // t.same(response.body, {
  //   "status": "success",
  //   "body": {
  //     "id": "1d4420b3-fd3b-468f-bf04-4f5e45dd9fb2",
  //     "name": "food",
  //     "createdAt": "2021-06-15T03:12:44.983Z"
  //   }
  // })
})

test('requests the "items/:id" DELETE route', async t => {
  t.plan(1)
  // t.teardown(() => fastify.close())
  const uuid = 'f8c27d4e-d7ae-4335-9da5-1c9756ebcd1c'
  const response = await fastify.inject({
    method: 'DELETE',
    url: `/items/${uuid}`,
  })

  // console.log(response)

  t.equal(response.statusCode, 200, 'returns a status code of 200')
  // t.same(response.body, {
  //   "status": "success",
  //   "body": {
  //     "id": "1d4420b3-fd3b-468f-bf04-4f5e45dd9fb2",
  //     "name": "food",
  //     "createdAt": "2021-06-15T03:12:44.983Z"
  //   }
  // })
})
