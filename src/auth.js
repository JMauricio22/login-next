const USER_NAME = 'Jhon';
export const USER = 'admin@example.com';
export const PASSWORD = 'password';

export default class Auth {
  constructor() {
    this.user = null;
    this.error = null;
  }

  onAuthStateChanged(callback) {
    this.callback = callback;
  }

  onUserChange(user, error) {
    this.callback && this.callback(user, error);
  }

  signin(username, password, delay = 3000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (USER === username && password === PASSWORD) {
          this.user = {
            email: USER,
            name: USER_NAME,
          };

          window.sessionStorage.setItem('user', JSON.stringify(this.user));
          this.onUserChange(this.user);
          return resolve(this.user);
        }

        const error = { message: 'Wrong email or password' };
        this.error = error;
        reject(error);
        this.onUserChange(null, this.error);
      }, delay);
    });
  }

  signout(delay = 0) {
    setTimeout(() => {
      this.user = null;
      window.sessionStorage.removeItem('user');
      this.onUserChange(this.user);
    }, delay);

    return this;
  }

  resolveUser(delay = 0) {
    setTimeout(() => {
      if (window) {
        const user = window.sessionStorage.getItem('user');
        if (user) {
          this.user = JSON.parse(user);
        } else {
          this.user = null;
        }
        this.onUserChange(this.user);
      }
    }, delay);

    return this;
  }
}
