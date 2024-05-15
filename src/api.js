// api.js
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': 'c76a1e2636msh45aef8a068997cep132b07jsn88f2e2dc26be',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

const fetchData = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
