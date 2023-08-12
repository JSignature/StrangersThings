import { useEffect, useState } from 'react'
import { getAllPosts } from '../API/routes'

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function fetchData() {
      setPosts(await getAllPosts())
    }

    fetchData()
  }, [])

  return (
    <>
      <div>
        {posts.map(post => (
          <h1>{post.title}</h1>
        ))}
      </div>
    </>
  )
}

export default Posts
