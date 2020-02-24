import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ContactPage extends React.Component {
		constructor(props) {
				super(props);
				this.state = {
					name: '',
					email: '',
					message: '',
					disabled: false,
					emailSent: null,
				}
		}

		handleChange = (event) => {

			const target = event.target;
			const value = target.type === 'checkbox' ? target.checked : target.value;
			const name = target.name;

			this.setState({
					[name]: value
			})
		}

		handleSubmit = (event) => {
				event.preventDefault();

				this.setState({
						disabled: true,
		
				})
		}



		render () {
			return (
			<div>
				<Hero title={this.props.title}/>

				<Content>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group>
								<Form.Label htmlFor="full-name">full name</Form.Label>
								<Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
							</Form.Group>

							<Form.Group>
								<Form.Label htmlFor="email">email</Form.Label>
								<Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
							</Form.Group>

							<Form.Group>
								<Form.Label htmlFor="message">message</Form.Label>
								<Form.Control id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleChange} />
							</Form.Group>

							<Button className="d-inline-block" variant="primary" typ="submit" disabled={this.state.disabled}>
							Send
							</Button>

							{this.state.emailSent === true && <p className="d-inline success-msg">email sent</p>}
							{this.state.emailSent === false && <p className="d-inline err-msg">email NOT sent</p>}

						</Form>
				</Content>
			</div>

		);
	}
}

export default ContactPage;
