const setupRegister = () => {
  const register = (event) => {
    event.preventDefault()

    const username = document.getElementById('register-username').value
    const password = document.getElementById('register-password').value

    console.log('username is', username)
    console.log('password is', password)

    // await
    navigation.navigate('login')
  }


  document.getElementById('register-form')
    .addEventListener('submit', register)
}


export default setupRegister
