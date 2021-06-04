export const CREATE = 'CREATE'
export const READ = 'READ'
export const UPDATE = 'UPDATE'
export const DELETE = 'DELETE'

export const createItemAction = (item) => ({
  type: CREATE,
  data: { item }
})

export const readAction = () => ({
  type: READ
})

export const updateItemAction = (item) => ({
  type: UPDATE,
  data: { item }
})

export const deleteItemAction = (id) => ({
  type: DELETE,
  data: { id }
})