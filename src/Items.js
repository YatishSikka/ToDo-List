import React from 'react'

export const Items = ({item, deleteItem}) => {
  return (
    <>
    <p>{item.desc}</p>
    <button className='btn btn-danger' onClick={()=>{deleteItem(item)}}>Delete</button>
    <hr />
    </>
  )
}
