import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as A from 'src/redux/actions'

const MenuItem = ({ id, children }) => {
  const dispatch = useDispatch()
  const [updateItem, setUpdateItem] = useState('')
  const [openEdit, setOpenEdit] = useState(false)

  const handleChange = (e) => {
    setUpdateItem(e.target.value)
  }

  const handleCancel = () => {
    setOpenEdit(false)
  }

  const handleEdit = (e) => {
    setOpenEdit(true)
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    dispatch(A.updateItem(updateItem, id))
    setUpdateItem('')
    setOpenEdit(false)
  }

  const handleDelete = () => {
    dispatch(A.deleteItem(id))
  }

  return (
    <div>
      {openEdit ? (
        <form>
          <input type="text" value={updateItem} onChange={handleChange} placeholder="Item Name" />
          <button onClick={handleCancel}>cancel</button>
          <button onClick={handleUpdate}>done</button>
        </form>
      ) : (
        <Fragment>
          {children}
          <button onClick={handleEdit}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </Fragment>
      )}
    </div>
  )
}

export default MenuItem