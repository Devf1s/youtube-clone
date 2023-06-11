import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
	params: {
		maxResults: '50'
	},
	headers: {
		'Access-Control-Allow-Credentials': true,
		'X-RapidAPI-Key': 'c02d2380ddmsh7b9e4a1a18fff95p1bfdedjsn4eb67ac04abc',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};