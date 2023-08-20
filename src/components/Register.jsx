import { useState } from 'react'
import { registerUser } from '../API/routes'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState(' ')

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
    const result = await registerUser(data)
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
        <label>
          Password Confirmation:
          <input
            type="text"
            name="passwordConf"
            onChange={e => setPasswordConf(e.target.value)}
          />
        </label>
        {password === passwordConf ? (
          <input type="submit" value="Submit" />
        ) : (
          <p>Please enter a matching password to submit</p>
        )}
      </form>
    </>
  )
}

export default Register
