import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Autorization: "A1LBSuqqU8C8hPHB-vynzZyLI5iwPix1v2mKNLnJlW6brL4NUdEweMOI3tuqajQXydTf7c_VUhuT3tNZETi28LbTE5qkvJHntsZEffWoJS9oDzRv7faLETrAie8fXiOsD4utBGKwh4z3UQwuRmAZvGYJcjRtJ7ytOriQLzegFZatGGpx0wTwAvufNqYeAOhYDTJLnUVqad5mbIFFUlrU_2LBXG_0z2rQxrv4fuHIar68HMmMoB-w-gVXCZ-O:feedlydev"
    }
})

export default api;