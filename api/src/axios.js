const  axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    get: axios.create({
        baseURL: process.env.FEEDLY_API_URL,
        headers: {
            Autorization:  process.env.FEEDLY_API_KEY
        }
    })

}