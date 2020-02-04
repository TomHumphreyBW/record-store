const axios = require('axios');

const url = 'http://localhost:3000';

export function getRecords() {
    return axios.get(`${url}/records`)
        .then(response => {
            return response.data.records;
        })
        .catch(error => {
            console.log('error', error)
            return []
        });
}

export function getRecord(recordId) {
    return axios.get(`${url}/records/${recordId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log('error', error)
            return []
        });
}
