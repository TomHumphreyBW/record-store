const axios = require('axios');

const url = 'localhost:3000';

function getRecords() {
    return axios.get(`${url}/records`)
    .then(response => {
        console.log(response);
    })
}

export default getRecords;