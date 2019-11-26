const axios = require('axios');

const url = 'http://localhost:3000';

export function getRecords() {
    return axios.get(`${url}/records`)
    .then(response => {
        console.log("b");
       return response.data.records;
    })
    .catch(error => {
        console.log('error', error)
        return []
    });
}
