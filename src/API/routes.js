const baseURL =
  'https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-A'

const getAllPosts = async () => {
  try {
    const resp = await fetch(`${baseURL}/posts`)
    const result = await resp.json()

    return result.data.posts
  } catch (error) {
    console.log(error)
  }
}

export { getAllPosts }
