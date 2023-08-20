import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../API/routes'
import NavBar from './NavBar'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      user: {
        username: username,
        password: password,
      },
    }
    console.log(data)
    const result = await loginUser(data)
    localStorage.setItem('token', result.data.token)
    alert(result.data.message)
    navigate(`/`)
  }

  return (
    <>
      <NavBar />
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={e => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
export default Login
