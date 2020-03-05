import React from 'react';
import Fade from 'react-reveal/Fade';
import CardInfo from '../components/Cardinfo';


function Card(props) {
		return (
			<Fade left>
			<div className="d-inline-block b-card" onClick={(e) => props.click(props.item)}>
				<img className='b-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
				{ props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/> }

			</div>
			</Fade>
		);
}

export default Card;
