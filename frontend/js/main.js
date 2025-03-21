import setupLogin from './login.js'
import navigation from './router.js'

window.navigation = navigation


setupLogin()

navigation.navigate('login')
