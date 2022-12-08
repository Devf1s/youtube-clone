import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utilities/fetchFromAPI';
import { Videos } from './';
import { useParams } from 'react-router-dom';

function SearchFeed() {
	const [videos, setVideos] = useState([]);
	const { searchTerm } = useParams();

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
			.then((data) => setVideos(data.items));
	}, [searchTerm]);

	return (
		<Box
			p={2}
			sx={{
				flex: 2,
				height: '90vh',
				overflowY: 'auto'
			}}
		>
			<Typography
				variant="h4"
				fontWeight="bold"
				mb={2}
				sx={{
					color: '#fff',

				}}
			>
				Search Results for: {' '}
				<span style={{ color: '#f31503' }}>{ searchTerm } </span> videos
			</Typography>

			<Videos videos={videos} />
		</Box>
	)
}
export default SearchFeed;