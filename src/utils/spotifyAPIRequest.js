const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://spotify81.p.rapidapi.com/artist_singles',
  params: {
    id: '1Ngynwc6bFIKGzRcOrBAnx'
},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
  }
};

export const fetchAPI = async () => {
    const { data } = await axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    
}