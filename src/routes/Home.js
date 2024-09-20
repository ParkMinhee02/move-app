import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss';
import Appmovie from '../components/Appmovie';
import Upcoming from '../components/Upcoming';

const Home = () => {
	const [appMovie, setAppMovie] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getMovies = async () =>{
		try{
		   const response= await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko-KR`);
		   setAppMovie(response.data.results);
		   console.log(response.data);
		   setLoading(false);
		}catch(error){
		   console.log('Error:', error);
		   setLoading(false);
		}
	}

	useEffect(() => {
		getMovies();
	},[]);

	return (
		<>
			<Upcoming />
			<div className='homeWrap'>
				<h2>상영작</h2>
				{
					isLoading ? (<div><span className='load'>Loading...</span></div>):(
						<div className="appWrap">
							{appMovie.map((amovie) => (<Appmovie key={amovie.id} id={amovie.id} title={amovie.title} poster_path={amovie.poster_path} release_date={amovie.release_date}/>))}
						</div>
					)
				}
			</div>
		</>
	);
};

export default Home;