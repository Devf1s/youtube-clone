import React from 'react';
import { Stack, Box } from '@mui/material';	
import { VideoCard, ChannelCard, Loader } from './';

function Videos({ videos, direction, justifyContent }) {
	if (!videos?.length) return <Loader />;

	return (
		<Stack
			sx={{ 
				flexDirection : direction || { xs: 'column', sm: 'row' },
				justifyContent: justifyContent || { xs: 'center', md: 'start' },
				alignItems: 'center'
			}} 
			flexWrap="wrap"
			gap={2}
		>
			{videos.map((item, id) => (
				<Box
					key={id}
				>
					{ item.id.videoId && <VideoCard video={item} /> }
					{ item.id.channelId && <ChannelCard channel={item} /> }
				</Box>
			))} 
		</Stack>
	)
}
export default Videos;