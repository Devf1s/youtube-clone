import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utilities/fetchFromAPI';
import { Sidebar, Videos } from './';

function Feed() {
	const [selectedCategory, setSelectedCategory] = useState('New');
	const [videos, setVideos] = useState([]);
	
	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
			.then((data) => setVideos(data.items));

	}, [selectedCategory]);

	return (
		<Stack
			sx={{flexDirection: { sx: 'column', md: 'row'}}}
		>
			<Box
				sx={{
					height: { sx: 'auto', md: '92vh'}, 
					borderRight: '1px solid #3d3d3d', 
					px: { sx: 0, md: 2 }
				}}
			>
				<Sidebar 
					selectedCategory={selectedCategory}
					updateCategory={setSelectedCategory}
				/>
				
				<Typography
					className="copyright"
					variant="body2"
					sx={{
						my: 1,
						px: { sm: 1 },
						py: { sm: 0.5 },
						opacity: { sm: '0.6' },
						color: '#fff'
					}}
				>
					Copyright 2022 Kiri's Media
				</Typography>
			</Box>

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
						color: '#fff'
					}}
				>
					{ selectedCategory + ' '} 
					<span style={{color: '#f31503'}}>
						videos
					</span>
				</Typography>
					
				<Videos videos={videos} />
			</Box>
		</Stack> || <Loader/>
	)
}
export default Feed;