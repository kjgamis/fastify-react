import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as A from 'src/redux/actions'

const Menu = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(A.readAction())
  }, [])
  
  return (
    <div>
      MENU COMPONENT
    </div>
  )
}

export default Menu