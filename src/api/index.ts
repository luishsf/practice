import axios from 'axios';

export async function getUserByEmail(email: string, token: string) {
    const URL = "";

    let response = await axios
        .get(`${URL}/users/${email}/`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    return response;
}

export async function sendPayment(email: string, token: string, value: number) {
    const URL = "";

    let response = await axios
        .post(`${URL}/users/${email}/add/${value}/`,
        {   
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    return response;
}
