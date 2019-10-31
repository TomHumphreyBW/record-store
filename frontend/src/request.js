const axios = require('axios');

const url = 'http://localhost:3000';

function getRecords() {
    return axios.get(`${url}/records`)
    .then(response => {
        console.log(response);
    })
}

export default getRecords;
