import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

function ChannelCard({ channel, marginTop }) {
	return (
		<Box
			sx={{
				boxShadow: 'none',
				borderRadius: '20px',
				
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',

				height: '326px',
				width: { sm: '356px', md: '320px' },
				margin: 'auto',
				marginTop
			}}
		>
			<Link to={`/channel/${channel?.id?.channelId}`} >	
				<CardContent
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						textAlign: 'center',
						color: '#fff'
					}}
				>
					<CardMedia 
						component='img'
						image={channel?.snippet?.thumbnails?.high?.url}
						alt={channel?.snippet?.title}
						sx={{
							width: { xs: '160px', sm: '180px' },
							height: { xs: '160px', sm: '180px' },
							borderRadius: '50%',
							border: '1px solid #e3e3e3',
							mx: 'auto',
							mb: 2
						}}
					/>
					<Typography variant="h6">
						{channel?.snippet?.title}
						<CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
					</Typography>

					{ channel?.statistics?.subscriberCount && 
						<Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
							{ parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US') } 
							{' '} Subscribers
						</Typography>
					}
				</CardContent>
			</Link>
		</Box>
	)
}

export default ChannelCard;