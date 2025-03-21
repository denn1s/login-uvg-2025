const setupLogin = () => {
  const login = async (event) => {
    event.preventDefault()

    const username = document.getElementById('login-username').value
    const password = document.getElementById('login-password').value

    console.log('username is', username)
    console.log('password is', password)


     // await
    const response = await fetch('http://127.0.0.1:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }) 
    const data = await response.json()

    if (data.success) {
      alert("User logged in")
      navigation.navigate('loggedin')
      document.getElementById('username-display').textContent = username
    } else {
      alert("Failed to login user")
    }
  }

  document.getElementById('login-form')
    .addEventListener('submit', login)
}


export default setupLogin
