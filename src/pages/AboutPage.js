import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
		return (
			<div>
				<Hero title={props.title} />

				<Content>
				<p> Hello, I'm Rachel Brochado.
				<p>Before beginning my career in the tech industry in Germany, I finished my Masters in Sustainability Science and Policy in Maastricht, Netherlands.</p>
				<p>My main goal is to be able to spread the word for what I believe, and to support more fair and socially responsible technologies.</p>
				<p>I believe in  technology to recreate the necessary balance of the health of our nature and planet, in the power of communities, and freedom as fuel to bring change in human behavior.</p>
				<p>Besides all of that, I'm very interested in biking, live music and in getting better at computer programming (atm React!).</p>
				</p>

				</Content>
			</div>

		);
}

export default AboutPage;
