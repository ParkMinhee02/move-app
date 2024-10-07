import React, { useEffect } from 'react';
import axios from 'axios';

const Users = () => {
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users').then(Response => {
			console.log(Response.data);
		})
	})
	return (
		<div className='usersWrap'>
			<h1>Users</h1>
		</div>
	);
};

export default Users;