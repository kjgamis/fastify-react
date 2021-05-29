import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/redux'
import Menu from 'src/components/Menu'

const root = document.querySelector("#root")

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
    </Provider>
  )
}

ReactDOM.render(<App />, root)