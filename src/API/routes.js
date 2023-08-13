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

const registerUser = async data => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const result = await response.json()
    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it
    console.log(result)
    return result
  } catch (err) {
    console.error(err)
  }
}
const loginUser = async data => {
  try {
    const response = await fetch(`${baseURL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const result = await response.json()
    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it
    console.log(result)
    return result.success === false ? alert(result.error.message) : result
  } catch (err) {
    console.error(err)
  }
}

export { getAllPosts, registerUser, loginUser }
