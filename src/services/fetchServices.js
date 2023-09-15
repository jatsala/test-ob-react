export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response:', response)
    console.log('Status:', response.status)
    console.log('Ok?', response.ok)
    return response.json()
}

export const getAllPageUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response:', response)
    console.log('Status:', response.status)
    console.log('Ok?', response.ok)
    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('Response:', response)
    console.log('Status:', response.status)
    console.log('Ok?', response.ok)
    return response.json()
}

export const login = async (email, password) => {
    let body = {
        email, password
    };
    //TODO: Terminar la configuración del cors
    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        cache: 'no-cache',
        headers: {
            'Content-type': 'application/json'
        },
        body,
    });

    console.log('Response:', response)
    console.log('Status:', response.status)
    console.log('Ok?', response.ok)
    return response.json();
}
