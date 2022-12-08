import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos, Loader } from './';
import { fetchFromAPI } from '../utilities/fetchFromAPI';

function VideoDetail() {
	const [videoDetail, setVideoDetail] = useState(null);
	const [relatedVideos, setRelatedVideos] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
			.then((data) => setVideoDetail(data.items[0]));

		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
			.then((data) => setRelatedVideos(data.items));
	}, [id]);

	if (!videoDetail?.snippet) return <Loader />;

	const { 
		snippet: { title, channelId, channelTitle }, 
		statistics: { viewCount, likeCount } 
	} = videoDetail;

	const origin = 'https://1kiritos1.github.io/' // http://127.0.0.1:5173

	return (
		<Box minHeight="95vh">
			<Stack direction={{ xs: 'column', md: 'row' }}>
				<Box flex={1}>
					<Box
						sx={{
							width: '100%',
							position: 'sticky',
							top: '0px'
						}}
					>
						<ReactPlayer 
							url={`https://www.youtube.com/watch?v=${id}` 
							+ `?showinfo=0&enablejsapi=1&origin=${origin}`} 
							className="react-player"
							controls
						/>
						<Typography
							sx={{ typography: { xs: 'h6', sm: 'h5' } }}
							fontWeight="bold"
							color="#fff"
							p={2}
						>
							{ title }
						</Typography>
						<Stack 
							direction="row"
							flexWrap="wrap"
							gap={3}
							sx={{ 
								color: '#fff', 
								justifyContent: { xs: 'center', sm: 'space-between' }, 
								py: 1, px: 2
							}}
						>
							<Link to={`/channel/${channelId}`}>
								<Typography
									sx={{ typography: { sm: 'subtitle1', md: 'h6' } }}
									color="#fff"
								>
									{ channelTitle }
									<CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
								</Typography>
							</Link>
							<Stack
								direction="row"
								alignItems="center"
								gap="20px"
							>
								<Typography
									sx={{ opacity: 0.7, typography: { xs: 'body2', md: 'body1' } }}
								>
									{ parseInt(viewCount).toLocaleString('en-US') } views
								</Typography>
								<Typography	
									sx={{ opacity: 0.7, typography: { xs: 'body2', md: 'body1' } }}
								>
									{ parseInt(likeCount).toLocaleString('en-US') } likes
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>

				<Box
					px={2}
					py={{ md: 1, xs: 5 }}
					flexWrap="wrap"
					justifyContent="center"
					alignItems="center"
				>
					<Videos 
						videos={relatedVideos} 
						direction={window.innerWidth < 900 ? 'row' : 'column'} 
					/>
				</Box>
			</Stack>
		</Box>
	)
}
export default VideoDetail;