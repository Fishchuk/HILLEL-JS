function getPasswordFromUser(success, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") success();
  else fail();
}

let user = {
  name: 'Andrew',

  loginSuccess() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

getPasswordFromUser(success => user.loginSuccess(), fail => user.loginFail());