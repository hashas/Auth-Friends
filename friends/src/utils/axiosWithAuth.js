import axios from 'axios';

// as I understand this a) stores a token to localStorage
// and b) returns a baseURL and header token so I don't need
// to repeate this code everywhere I have an axios call

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: token,
        },
    });
};