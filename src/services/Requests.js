// URL to API whether in production or development
const api = 'http://localhost:3000/';

function authenticateUserFetch(token){
    return fetch(api + 'auth', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then(res => res.json())
}

function loginFetch(login){
    return fetch(api + 'login', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login),
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return res.json().then((data) => {throw data;})
        }
    })
}

function signupFetch(login){
    return fetch(api + 'signup', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login),
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return res.json().then((data) => {throw data;})
        }
    })
}


export {
    authenticateUserFetch,
    loginFetch,
    signupFetch
}