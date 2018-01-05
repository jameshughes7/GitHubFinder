const request = require('axios');

module.exports = {
  getUser(username) {
    return request
      .get(`https://api.github.com/users/${username}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};
