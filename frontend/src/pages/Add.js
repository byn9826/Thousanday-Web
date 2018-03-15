import React, {Component} from "react"
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { 
	changeAddDetail, changeAddUpdate, createAddPet
} from '../redux/actions/add';
import { domainUrl } from '../helpers/config';
import Updateprofile from '../components/Updateprofile';
import Inputbox from '../components/Inputbox';
import Pickgender from '../components/Pickgender';
import Droplist from '../components/Droplist';
import '../styles/add.css';

class Add extends Component {
	chooseProfile(value) {
		this.props.changeAddDetail('Avatar', value);
	}
	chooseType(value) {
		this.props.changeAddDetail('Type', value);
	}
	chooseGender(value) {
		this.props.changeAddDetail('Gender', value);
	}
	chooseNature(value) {
		this.props.changeAddDetail('Nature', value);
	}
	createPet() {
		const petName = this.refs.newName.state.content.trim();
		const petGender = parseInt(this.props.add.createGender);
		const petType = parseInt(this.props.add.createType);
		const petNature = parseInt(this.props.add.createNature);
		const petAvatar = this.props.add.createAvatar;
		if (petName.length === 0) {
			this.props.changeAddUpdate('Pet name can′t be empty!');
		} else if (petGender !== 0 && petGender !== 1) {
			this.props.changeAddUpdate('Please choose pet′s gender!');											 
		} else if (petType !== 0 && petType !== 1 && petType !== 2 && petType !== 3 && petType !== 4) {
			this.props.changeAddUpdate('Please choose pet′s type!');
		} else if (petNature !== 0 && petNature !== 1 && petNature !== 2 && petNature !== 3) {
			this.props.changeAddUpdate('Please choose pet′s nature!');
		} else if (!petAvatar) {
			this.props.changeAddUpdate('Please upload pet′s avatar!');
		} else {
			this.props.createAddPet(
				petName, 
				petGender, 
				petType, 
				petNature, 
				petAvatar, 
				this.props.account.id,
				this.props.account.token
			);
		}
	}
	render() {
		if (this.props.add.redirectUser) {
      return <Redirect to={ '/user/' + this.props.account.id } />;
    }
		return (
			<main id="main">
				<h3>Add new pet:</h3>
				<h5 id="main-update">{ this.props.add.updateResult }</h5>
				<section id="main-contain">
					<Updateprofile 
						alt="Pet Profile" 
						format="image/png" 
						width="200" 
						saveProfile={ this.chooseProfile.bind(this) } 
						indicate="Upload Avatar" 
						fontFamily="'Rubik', sans-serif" 
					/>
					<div className="main-contain-holder">
						<label htmlFor="new-name">His/Her name:</label>
						<Inputbox 
							id="new-name" 
							ref="newName" 
							content="" 
							max="10" 
							width="200px" 
							fontFamily="'Rubik', sans-serif" 
						/>
						<label className="main-contain-holder-lable">Choose gender:</label>
						<h6>You can't change gender after creation</h6>
						<Pickgender 
							chooseGender={ this.chooseGender.bind(this) } 
							fontFamily="'Rubik', sans-serif" 
						/>
						<label className="main-contain-holder-lable">Choose Type:</label>
						<h6>You can't change type after creation</h6>
						<Droplist 
							id="new-type" 
							width="80%" 
							options={ ["dog", "cat", "bird", "fish", "other"] } 
							title="His/Her type" 
							showTitle="true" 
							changeValue={ this.chooseType.bind(this) } 
							fontFamily="'Rubik', sans-serif" 
						/>
						<label className="main-contain-holder-lable">Choose Nature:</label>
						<h6>You can't change nature after creation</h6>
						<Droplist 
							id="new-nature" 
							width="80%" 
							options={ ["cute", "strong", "smart", "beauty"] } 
							title="His/Her nature" 
							showTitle="true" 
							changeValue={ this.chooseNature.bind(this) } 
							fontFamily="'Rubik', sans-serif" 
						/>             
					</div>
					<h5 onClick={ this.createPet.bind(this) } id="main-add">Add</h5>
				</section>
			</main>
		);
	}
}

export default connect(
  (state) => ({ add: state.add, account: state.account }),
  { 
		changeAddDetail, changeAddUpdate, createAddPet
	}
)(Add);