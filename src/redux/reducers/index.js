import * as A from 'src/redux/actions'

const defaultState = {
  items: [{ id: 1, name: 'abc' }, { id: 1, name: 'def' }, { id: 3, name: 'ghi' }]
}

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case A.CREATE:
      return { ...state, items: action.data.item }
    case A.READ:
      return state
    case A.UPDATE:
      const newItem = { ...action.data.item }
      return {
        items: [...state.items].map(item => {
          item.id === newItem.id ? newItem : item
        })
      }
    case A.DELETE:
      const { id } = action.data
      return {
        items: [...state.items].filter(item => item.id !== id)
      }
    default:
      return state
  }
}