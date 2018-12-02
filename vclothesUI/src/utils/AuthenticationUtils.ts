class Auth {
  static getToken(): string {
    return localStorage.getItem('token') || '';
  }

  static setToken(token: string): void {
    localStorage.setItem('token', token)
  }

}

export default Auth;
