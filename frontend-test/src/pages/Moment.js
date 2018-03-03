import React, { Component } from 'react';

class Moment extends Component {
	render() {
		return ([
			<main id="main">
				<img 
					alt="moment-image" 
					src={
						"/img/pet/" + this.state.momentData.pet_id + "/moment/" + this.state.momentData.image_name
					} 
				/>
				<h5>
					{
						this.state.momentData.moment_date ?
							new Date(this.state.momentData.moment_date).toISOString().substring(0, 10) : 
							null
					}
				</h5>
			</main>
		]);
	}
}