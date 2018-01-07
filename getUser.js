const axios = require("axios");

var url = "https://api.github.com/users";


module.exports = {
 getUser(username) {
   return axios
     .get(url + `/${username}`, {
         params: {
           client_id: "833ab42dcfdbbdd0664a",
           client_secret: "a0cdae701a5e1bb6d1f73aa6b60f71b2acb79412"
         },
         headers: {

         }   
    })
     .then(res => res.data)
     .catch(error => console.log(error));
 }
};
