import * as A from '../actions'

const defaultState = {
  loading: false,
  items: []
}

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case A.CREATE:
      const { id, name, createdAt } = action.data
      return {
        ...state,
        items: [
          ...state.items,
          { id, name, createdAt }
        ]
      }
    case A.READ:
      return state
    case A.UPDATE:
      const newItem = { ...action.item }
      const updatedItems = state.items.map(item => {
        var returnValue = { ...item };

        if (item.id === newItem.id) {
          returnValue = item.name === newItem.name ? item : newItem
        }
        return returnValue
      })

      return {
        ...state,
        items: [
          ...updatedItems
        ]
      }
    case A.DELETE:
      return {
        items: [...state.items].filter(item => item.id !== action.id)
      }
    case A.FETCH_ITEMS_START:
      return { ...state, loading: true }
    case A.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.items
      }
    case A.FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        items: []
      }
    default:
      return state
  }
}