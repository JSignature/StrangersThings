import { useState } from 'react'
import { postItem } from '../API/routes'

const Form = ({ triggerEvent }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [willDeliver, setWillDeliver] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token'))

  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      post: {
        title,
        description,
        price,
        location,
        willDeliver,
      },
    }
    await postItem(data, token)
    triggerEvent(Math.random())
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            onChange={e => setPrice(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label>
          Will Deliver:
          <input
            type="text"
            name="willDeliver"
            onChange={e => setWillDeliver(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Form
