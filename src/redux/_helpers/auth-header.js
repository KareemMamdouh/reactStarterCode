const Lang = localStorage.getItem('Lang')
export function authHeaderAPI() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.AccessToken) {
    return { Authorization: `Bearer ${user.AccessToken}`, Lang: Lang || 'EN' }
  }
}
