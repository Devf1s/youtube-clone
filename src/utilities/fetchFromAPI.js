import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
	params: {
		maxResults: '50'
	},
	headers: {
		'X-RapidAPI-Key': 'becdfa3e76mshe18daf0391d455bp1c51efjsn836748658594',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};