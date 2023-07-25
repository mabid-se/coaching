const env = 'local'

let config = {

    // ENV 
    local: {
        base_url: 'http://192.168.100.23:3006'
    },
    prod: {
        base_url: 'https://sms-sgn-backend.onrender.com'
    },
    office: {
        base_url: ''
    }
}

// ENV
if (env === 'local') config = config.local;
if (env === 'prod') config = config.prod;
if (env === 'office') config = config.office;

export default config;
