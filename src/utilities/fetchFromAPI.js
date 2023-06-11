// import axios from 'axios';

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
// 	params: {
// 		maxResults: '50'
// 	},
// 	headers: {
// 		'Access-Control-Allow-Credentials':true,
// 		'X-RapidAPI-Key': '91766d6993msh3bd85c80e2cd0a0p118319jsn781536a29bad',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };	

// export const fetchFromAPI = async (url) => {
// 	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
// 	return data;
// };

import axios from 'axios';

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';

const options = {
	params: {
		key: 'AIzaSyDt5UiC0GjBFC8rbn7ZTMM7cc06hl0l_Fg',
		maxResults: '50'
	}
};
export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};