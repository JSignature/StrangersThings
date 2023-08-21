import React from 'react'
// import { data } from '../data'

const PostDetails = ({ data }) => {
  const item = data[0]
  console.log(item)
  return (
    <>
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
