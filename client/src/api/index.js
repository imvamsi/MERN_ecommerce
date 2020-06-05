const url ='http://localhost:8000/api'

export const signup = (user) => {
    fetch(`${url}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}