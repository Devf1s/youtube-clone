import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { logo } from '../utilities/constants';
import SearchBar from './SearchBar';

function Navbar() {
	return (
		<Stack 
			direction="row" 
			justifyContent="space-between"
			alignItems="center" 
			p={2} 
			sx={{ 
				position: 'sticky', 
				top: '0', 
				backgroundColor: '#000', 
				zIndex: 999
			}}
		>
			<Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
				<img src={logo} alt="Logo" height={45} />
			</Link>
			<SearchBar />
		</Stack>
	)
}
export default Navbar;