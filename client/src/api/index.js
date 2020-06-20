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


//create category

export const createCategory = (userId, token, category) => {
    return fetch(`${url}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(res =>  {
        return res.json()
    })
    .catch(err => console.log(err))
}
