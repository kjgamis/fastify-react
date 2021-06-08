import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as A from 'src/redux/actions'
import { getItems } from 'src/api'

const Menu = () => {
  const [data, setData] = useState('')
  const dispatch = useDispatch()
  console.log(data.length)

  const renderThis = () => {
    if (data.length > 0) {
      data.map(each => {
        return (
          <div>
            {JSON.stringify(each.name)}
          </div>
        )
      })
    }
  }

  useEffect(() => {
    // getItems()
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => error)
  }, [])

  return (
    <div>
      {JSON.stringify(data)}
      {/* {renderThis()} */}
    </div>
  )
}

export default Menu