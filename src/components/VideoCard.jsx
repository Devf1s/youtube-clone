import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

function VideoCard({ video : { id: { videoId }, snippet } }) {
	return (
		<Card 
			sx={{ 
				width: { xs: '100%', sm: '358px', md: '320px' },
				maxWidth: { xs: '358px' },
				boxShadow: 'none',
				borderRadius: 0
			}}
		>
			<Link to={`/video/${videoId}`}>
				<CardMedia 
					image={snippet?.thumbnails?.high?.url} 
					alt={snippet?.title}
					sx={{ 
						height: { xs: snippet?.title.length < 35 ? 125 : 163, sm: 180 }, 
						width: { xs: '100%', sm: '358px', md: '320px' }, 
						maxWidth: { xs: '358px' }
					}}
				/>
			</Link>
			<CardContent sx={{ 
				backgroundColor: '#1e1e1e', 
				height: { xs: snippet?.title.length < 35 ? 135 : 160, sm: '140px' }
			}}>
				<Link to={`/video/${videoId}`}>
					<Typography 
						variant="subtitle1" 
						fontWeight="bold" 
						color="#fff"
					>
						{ snippet?.title.slice(0, 60) }
					</Typography>
				</Link>
				<Link to={`/channel/${snippet?.channelId}`}>
					<Typography 
						variant="subtitle2"  
						fontWeight="bold" 
						color="gray"
					>
						{ snippet?.channelTitle }
						<CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
					</Typography>
				</Link>
			</CardContent>
		</Card>
	)
}
export default VideoCard;