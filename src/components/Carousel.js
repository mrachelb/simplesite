import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';
import rach1 from '../assets/images/rach1.jpg';
import rach2 from '../assets/images/rach2.jpg';
import rach3 from '../assets/images/rach3.jpg';

class Carousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
                {
                    id: 0,
                    title: 'Creative Mornings',
                    subTitle: 'Sustainable web beyond ad revenue',
                    imgSrc: rach1,
                    link: 'https://creativemornings.com/talks/rachel-brochado',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Sustainability of the Web',
                    subTitle: 'Users should be in control',
                    imgSrc: rach2,
                    link: 'https://www.youtube.com/watch?v=8xPHddaaSEk',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Commitment',
                    subTitle: 'Lookafter: social network for plant lovers',
                    imgSrc: rach3,
                    link: 'https://github.com/mrachelb',
                    selected: false
                },
            ]

		}
	}

	handleCardClick = (id, card) => {
		console.log(id);
			let items = [...this.state.items];

			items[id].selected = items[id].selected ? false : true;
			items.forEach(item => {
				  if(item.id !== id) {
						item.selected = false;

					}
			});
			this.setState({
				  items
			})
	}

	makeItems = (items) => {
		  return items.map(item => {
				  return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
			})

	}

		render() {

				return (
					<Container fluid={true}>
					<Row className="justify-content-around">
					{this.makeItems(this.state.items)}
					</Row>
					</Container>

				);
		}

}

export default Carousel;
