import { useEffect, useState } from 'react'
import { getAllPosts } from '../API/routes'
import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import Form from './Form'
import Modal from 'react-modal'
import React from 'react'
import PostDetails from './PostDetails'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState('')
  const [triggerEvent, setTriggerEvent] = useState(1)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [selectedItem, setSelectedItem] = useState([])

  let location = useLocation()

  useEffect(() => {
    async function fetchData() {
      setPosts(await getAllPosts())
    }
    setIsLoggedIn(localStorage.getItem('token'))

    fetchData()
  }, [location, triggerEvent])

  //modal
  function openModal(id) {
    setSelectedItem(posts.filter(post => post._id === id))

    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: ' black',
    },
  }

  return (
    <>
      <NavBar />

      <div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Item detail modal"
        >
          <button onClick={closeModal}>close</button>

          <PostDetails
            data={selectedItem}
            closeModal={closeModal}
            triggerEvent={setTriggerEvent}
          />
        </Modal>
      </div>

      {isLoggedIn ? (
        <Form triggerEvent={setTriggerEvent} />
      ) : (
        <h2>Please log in to add an item</h2>
      )}

      <div>
        {posts.map(post => (
          <div key={post._id}>
            <p>{post.title}</p>
            <button onClick={() => openModal(post._id)}>Details</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Posts
