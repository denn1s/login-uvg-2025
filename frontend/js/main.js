import setupLogin from './login.js'
import setupRegister from './register.js'
import navigation from './router.js'

window.navigation = navigation


setupLogin()
setupRegister()

navigation.navigate('login')
