const setupRegister = () => {
  const register = async (event) => {
    event.preventDefault()

    const username = document.getElementById('register-username').value
    const password = document.getElementById('register-password').value

    console.log('username is', username)
    console.log('password is', password)

    // await
    const response = await fetch('http://127.0.0.1:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }) 
    const data = await response.json()

    if (data.success) {
      alert("User created")
      navigation.navigate('login')
    } else {
      alert("Failed to create user")
    }
  }

  document.getElementById('register-form')
    .addEventListener('submit', register)
}


export default setupRegister
