import request from '@/utils/request'


export async function Login(payload) {
  return request(`/api/login/user/`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export async function Logout(payload) {
  return request(`/api/logout/user/`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
