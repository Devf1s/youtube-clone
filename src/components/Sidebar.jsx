import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utilities/constants';

function Sidebar({ selectedCategory, updateCategory }) {
	return (
		<Stack
			direction="row"
			sx={{
				overflowY: 'auto',
				height: { sx: 'auto', md: '95%' },
				flexDirection: { md: 'column' },
				whiteSpace: { sm: 'nowrap' }
			}}
		>
			{categories.map(category => (
				<button
					key={category.name}
					onClick={() => updateCategory(category.name)}
					className="category-btn"
					style={{
						color: '#fff',
						background: category.name === selectedCategory && '#fc1503'
					}}
				>	
					<span style={{ 
						color: category.name === selectedCategory ? 'white' : 'red',
						marginRight: '15px'
					}}>
						{category.icon}
					</span>
					<span style={{ 
						whiteSpace: 'nowrap',
						opacity: category.name === selectedCategory ? '1' : '0.8'
					}}>
						{category.name}
					</span>
				</button>
			))}
		</Stack>
	)
}
export default Sidebar;