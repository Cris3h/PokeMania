require('dotenv').config();


module.exports = {
    apiURL: process.env.API_URL,
    apiURLID:process.env.API_URL_ID,
    apiURLType: process.env.API_URL_TYPES,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    port: process.env.PORT || 3001,
    request: process.env.API_REQUEST || 50,
}