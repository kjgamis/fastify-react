import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuItem from 'src/components/MenuItem'
import * as A from 'src/redux/actions'

const Menu = () => {
  const dispatch = useDispatch()
  const items = useSelector(s => s.items)
  const [createItem, setCreateItem] = useState('')

  useEffect(() => {
    dispatch(A.fetchItems())
  }, [])

  const handleChange = (e) => {
    setCreateItem(e.target.value)
  }

  const handleCreate = (e) => {
    e.preventDefault()
    dispatch(A.createItem(createItem))
    setCreateItem('')
  }

  return (
    <div>
      <h1>ITEMS</h1>
      <form>
        <input type="text" value={createItem} onChange={handleChange} placeholder="Item Name" />
        <button onClick={handleCreate}>add</button>
      </form>
      {items.length > 0
        ? items.map((item, index) => {
          return (
            <MenuItem key={`item-${index}`} id={item.id}>{item.name}</MenuItem>
          )
        })
        : ''}
    </div>
  )
}

export default Menu