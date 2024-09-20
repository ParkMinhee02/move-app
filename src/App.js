import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Movies from "./routes/Movies";
import Navbar from "./components/Navbar";
import './App.scss'

function App() {
	/* const onSubmit = () => {
		alert('안녕')
	}; */
	return (
	<div className="App">
		{/* <input type="text" onKeyUp={(e) => {
			if(e.keyCode === 13){onSubmit()}; //Enter키 입력 시 버튼 누르는 것과 같은 효과
		}} />
		<button onClick={onSubmit}>Submit</button> */}

		<Navbar />

		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about:id' element={<About />} />
			<Route path='/movies' element={<Movies />} />
		</Routes>
	</div>
);
}

export default App;
