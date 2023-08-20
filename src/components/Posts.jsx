import { useEffect, useState } from 'react'
import { getAllPosts } from '../API/routes'
import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState('')

  let location = useLocation()

  useEffect(() => {
    async function fetchData() {
      setPosts(await getAllPosts())
    }
    setIsLoggedIn(localStorage.getItem('token'))

    fetchData()
  }, [location])

  return (
    <>
      <NavBar />
      {isLoggedIn ? <h1>The user is logged in</h1> : <h2>Please log in</h2>}

      <div>
        {posts.map(post => (
          <div key={post._id}>
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Posts
