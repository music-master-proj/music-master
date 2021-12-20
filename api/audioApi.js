// const axios = require('axios');
// const moment = require('moment');

// getPlaylist = (dest, date) => {
//     return new Promise((resolve, reject) => {
//         axios.get(`https://www.metaweather.com/api/location/search/?query=${dest}`)
//             .then(response => {
//                 axios.get(`https://www.metaweather.com/api/api/location/${response.data[0].woeid}/${moment(date).format("YYYY/MM/DD")}`)
//                     .then(response => { resolve(response.data) })
//                     .catch(err => {
//                         reject(err);
//                     });
//             })
//             .catch(err => {
//                 reject(err);
//             });
//     });
// };
// module.exports = { getPlaylist };