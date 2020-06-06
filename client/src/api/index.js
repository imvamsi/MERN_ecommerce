const url ='http://localhost:8000/api'

export const signup = (user) => {
  return fetch(`${url}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res =>  {
        return res.json()
    })
    .catch(err => console.log(err))
}


export const signin = (user) => {
    return fetch(`${url}/signin`, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res =>  {
          return res.json()
      })
      .catch(err => console.log(err))
}

