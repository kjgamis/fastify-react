export const CREATE = 'CREATE'
export const READ = 'READ'
export const UPDATE = 'UPDATE'
export const DELETE = 'DELETE'

export const FETCH_ITEMS_START = 'FETCH_ITEMS_START'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'

const url = window.location.port === '3000' ? '/items' : 'http://localhost:3000/items'

export const fetchItems = () => {
  return dispatch => {
    dispatch({ type: FETCH_ITEMS_START })
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: FETCH_ITEMS_SUCCESS, items: data })
      })
      .catch(error => dispatch({ type: FETCH_ITEMS_FAILURE, error }))
  }
}

export const createItem = (name) => {
  return dispatch => {
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name
      })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: CREATE, data: data.body })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const updateItem = (name, id) => {
  return dispatch => {
    fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name
      })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: UPDATE, item: data.body })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const deleteItem = (id) => {
  return dispatch => {
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: DELETE, id: data.body.id })
      })
      .catch(error => {
        console.log(error)
      })
  }
}