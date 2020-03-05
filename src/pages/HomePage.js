import React from 'react';
import Hero from '../components/Hero';
import Fade from 'react-reveal/Fade';
import Carousel from '../components/Carousel';


function HomePage(props) {
		return (
			<div>
			<Fade right>
			<Hero title={props.title} subTitle={props.subTitle} />
			</Fade>
			<Carousel />
			</div>

		);
}

export default HomePage;
