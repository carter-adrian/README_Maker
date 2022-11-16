const axios = require('axios');

const api = {
    async getUser(userResonse) {
        try {let response = await axios
        
        .get(`https://api.github.com/users/${userResponses.username}`);code
        return response.data;
    }
        catch (error) {
            console.log(error);
        }
    }
};

module.exports = api;