const setupLogin = () => {
  const login = (event) => {
    event.preventDefault()

    const username = document.getElementById('login-username').value
    const password = document.getElementById('login-password').value

    console.log('username is', username)
    console.log('password is', password)

    navigation.navigate('loggedin')

    document.getElementById('username-display').textContent = username
  }


  document.getElementById('login-form')
    .addEventListener('submit', login)
}


export default setupLogin
