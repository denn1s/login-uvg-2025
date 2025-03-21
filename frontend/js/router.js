const navigation = {
  pages: ['login-page', 'register-page', 'loggedin-page'],

  navigate(page) {

  this.pages.forEach(p => document.getElementById(p).style.display = 'none')

    if (page === 'login') {
      document.getElementById('login-page').style.display = 'block'
    } else if (page === 'register') {
      document.getElementById('register-page').style.display = 'block'
    } else {
      document.getElementById('loggedin-page').style.display = 'block'
    }
  }
}

export default navigation
