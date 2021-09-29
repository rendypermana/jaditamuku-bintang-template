import axios from 'axios'

const domain = 'https://api-v2.jaditamuku.com/api/'
const baseURL = `${domain}`;

export const json = axios.create({
    baseURL,
    headers:{
        'Content-type': 'application/json'
    }
});