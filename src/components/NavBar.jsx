import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [href, setHref] = useState(location.pathname)

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('token') ? true : false
  )

  function handleClick() {
    if (isLoggedIn) {
      localStorage.clear()
      navigate('/')
      setIsLoggedIn(null)
    } else {
      navigate('/login')
    }
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <Link to="/profile">Profile</Link>
      ) : href === '/register' ? null : (
        <button
          onClick={() => {
            navigate('/register')
          }}
        >
          Register
        </button>
      )}
      {href === '/login' ? null : (
        <button onClick={() => handleClick()}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      )}
      <h1>Work in Progress, switching to Capstone</h1>
    </nav>
  )
}

export default NavBar
