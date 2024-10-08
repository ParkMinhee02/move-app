import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss';
import Appmovie from '../components/Appmovie';
import Upcoming from '../components/Upcoming';

const Home = () => {
	const [appMovie, setAppMovie] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [visibleMovies, setVisibleMovies] = useState(6);
	const moviesPerPage = 3;

	const getMovies = async () =>{
		
	}

	useEffect(() => {
		getMovies();
	},[]);

	const handleLodeMore = () => {
		setVisibleMovies((prevVisible) => prevVisible+moviesPerPage);
	};

	return (
		<>
			<Upcoming />
			<div className='homeWrap'>
				<h2>상영작</h2>
				{
					isLoading ? (<div><span className='load'>Loading...</span></div>):(
						<div className="appWrap">
							{appMovie.slice(0, visibleMovies).map((amovie) => (<Appmovie key={amovie.id} id={amovie.id} title={amovie.title} poster_path={amovie.poster_path} release_date={amovie.release_date}/>))}
						</div>
					)
				}
				{
					appMovie.length > visibleMovies && (
						<div className='more'>
							<button className='moreBtn' onClick={handleLodeMore}>More</button>
						</div>
					)
				}
			</div>
		</>
	);
};

export default Home;