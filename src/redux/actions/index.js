export const CREATE = 'CREATE'
export const READ = 'READ'
export const UPDATE = 'UPDATE'
export const DELETE = 'DELETE'

export const FETCH_ITEMS_START = FETCH_ITEMS_START
export const FETCH_ITEMS_SUCCESS = FETCH_ITEMS_SUCCESS
export const FETCH_ITEMS_FAILURE = FETCH_ITEMS_FAILURE

export const fetchItems = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEMS_START })
    fetch('/items')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({ type: FETCH_ITEMS_SUCCESS, items: data })
      })
      .catch(error => dispatch({ type: FETCH_ITEMS_FAILURE, error }))
  }
}