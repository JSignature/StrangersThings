import React from 'react'
import { deletePost } from '../API/routes'
// import { data } from '../data'

const PostDetails = ({ data, closeModal, triggerEvent }) => {
  const token = localStorage.getItem('token')
  console.log('token:', token)
  const item = data[0]
  console.log(item)
  async function handleClick(id) {
    await deletePost(id, token)
    triggerEvent(Math.random())
    closeModal()
  }

  return (
    <>
      <button onClick={() => handleClick(item._id)}>Delete</button>
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
      <h2>{item.price}</h2>

      {item.messages.map(message => (
        <p>{message}</p>
      ))}
    </>
  )
}

export default PostDetails
