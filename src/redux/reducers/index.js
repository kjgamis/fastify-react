import * as A from '../actions'

const defaultState = {
  items: [
    { id: 1, name: 'abc' },
    { id: 1, name: 'def' },
    { id: 3, name: 'ghi' }
  ]
}

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case A.CREATE:
      return { ...state, items: action.item }
    case A.READ:
      return state
    case A.UPDATE:
      const newItem = { ...action.item }
      return {
        items: [...state.items].map(item => {
          item.id === newItem.id ? newItem : item
        })
      }
    case A.DELETE:
      const { id } = action
      return {
        items: [...state.items].filter(item => item.id !== id)
      }
    case A.FETCH_ITEMS_START:
      return { ...state }
    case A.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.items
      }
    case A.FETCH_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error,
        items: []
      }
    default:
      return state
  }
}