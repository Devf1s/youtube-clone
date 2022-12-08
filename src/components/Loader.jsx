import React from 'react';
import { Box, Stack } from '@mui/material';
import { CircularProgress } from '@mui/material';

function Loader() {
	return (
		<Box minHeight="95vh">
			<Stack 
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="80vh"
			>
				<CircularProgress color="error" />
			</Stack>
		</Box>
	)
}

export default Loader;