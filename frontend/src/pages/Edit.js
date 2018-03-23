import React, {Component} from "react"
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { 
	readEditPage, changeEditUpdate, updateEditName, updateEditProfile, changeEditRemove,
	deleteEditRelative, changeEditAdd, resetEditSearch, readEditSearch, createEditRelative,
	changeEditOwnership, updateEditTransfer, changeEditEnd, updateEditRelation
} from '../redux/actions/edit';
import { domainUrl } from '../helpers/config';
import Updateprofile from '../components/Updateprofile';
import Inputbox from '../components/Inputbox';
import Confirmdel from '../components/Confirmdel';
import '../styles/edit.css';

class Edit extends Component {
	componentDidMount() {
    this.props.readEditPage(
			this.props.match.params.id, this.props.account.id
		);
  }
	saveProfile(file) {
		this.props.updateEditProfile(
			this.props.account.id,
			this.props.account.token,
			this.props.match.params.id,
			file
		);
	}
	saveName() {
		const petName = this.refs.petName.state.content.trim();
    if (petName != this.props.edit.petName) {
			if (petName.length > 0) {
        this.props.updateEditName(
					this.props.account.id,
					this.props.account.token,
					this.props.match.params.id,
					petName
				);
      } else {
				this.refs.petName.setState({ content: this.props.edit.petName });
				this.props.changeEditUpdate('Name can′t be empty!');
			}
    }
	}
	popupAdd() {
		this.props.changeEditAdd();
	}
	popupRemove() {
		this.props.changeEditRemove();
	}
	popupEnd() {
		this.props.changeEditEnd();
	}
	popupOwnership() {
		this.props.changeEditOwnership();
	}
	confirmRemove() {
		this.props.deleteEditRelative(
			this.props.account.id,
			this.props.account.token,
			this.props.match.params.id
		);
	}
	searchUser(event) {
		if (event.target.value.trim() === "") {
			this.props.resetEditSearch();
		} else {
			const id = parseInt(event.target.value.trim());
			if (id > 0) {
				this.props.readEditSearch(id);
			}
		}
	}
	confirmAdd() {
		this.props.createEditRelative(
			this.props.account.id,
			this.props.account.token,
			this.props.match.params.id,
			this.props.edit.search
		);
	}
	confirmTransfer() {
		this.props.updateEditTransfer(
			this.props.account.id,
			this.props.account.token,
			this.props.match.params.id,
			this.props.edit.petData.relative_id
		);
	}
	confirmEnd() {
		this.props.updateEditRelation(
			this.props.account.id,
			this.props.account.token,
			this.props.match.params.id
		);
	}
	render() {
		if (this.props.account.id === null) {
			return <Redirect to={ '/403' } />;
		} else if (this.props.edit.redirectHome) {
      return <Redirect to={ '/' } />;
    }
		let nameInput;
		if (this.props.edit.dataLoaded) {
			nameInput = <Inputbox 
				ref="petName" 
				content={ this.props.edit.petName } 
				max="10" 
				width="250px" 
				fontFamily="'Rubik', sans-serif" 
			/>
		}
		let relationBoard;
		if (this.props.account.id === parseInt(this.props.edit.petData.owner_id)) {
			if (this.props.edit.petData.relative_id !== null) {
				relationBoard = (
					<div id="main-contain-holder-relation">
						<h6>You are the owner</h6>
						<p onClick={ this.popupRemove.bind(this) }>Remove Relative</p>
						<p onClick={ this.popupOwnership.bind(this) }>Transfer Ownership</p>
					</div> 
				);
			} else {
				relationBoard = (
					<div id="main-contain-holder-relation">
						<h6>You are the owner</h6>
						<p onClick={ this.popupAdd.bind(this) }>Add Relative</p>
					</div> 
				);
			}
		} else if (this.props.account.id === parseInt(this.props.edit.petData.relative_id)) {
			relationBoard = (
				<div id="main-contain-holder-relation">
					<h6>You are the relative</h6>
					<p onClick={ this.popupEnd.bind(this) }>End Relation</p>
				</div> 
			);
		}
		let popAction, popContainer;
		if (this.props.edit.showRemove) {
			popContainer = (<div id="pop-back"></div>);
			popAction = (
				<section id="pop-action">
					<h5 id="pop-action-close" onClick={ this.popupRemove.bind(this) }>✗</h5>
					<h4 id="pop-action-title">Are you sure you want to remove the relative?</h4>
					<h5 id="pop-action-warn">
						Once you remove a relative, you won′t be able to resume it yourself.
					</h5>
					<Confirmdel 
						message="Remove Relative" 
						confirmDel={ this.confirmRemove.bind(this) } 
						fontFamily="'Rubik', sans-serif"
					/>
				</section>
			);
		} else if (this.props.edit.showAdd) {
			popContainer = (<div id="pop-back"></div>);
			popAction = (
				<section id="pop-action">
					<h5 id="pop-action-close" onClick={ this.popupAdd.bind(this) }>✗</h5>
					<h5 id="pop-action-warn">
						Add relative for { this.props.edit.petName } by user id
					</h5>
					<input 
						id="pop-action-search" 
						value={ this.props.edit.search } 
						placeholder="Search user by id" 
						onChange={ this.searchUser.bind(this) } 
					/>
					{
						this.props.edit.search !== this.props.account.id && this.props.edit.searchData ? (
							<div id="pop-action-show">
								<img 
									alt="user" 
									src={ domainUrl + "/img/user/" + this.props.edit.searchData.user_id + ".jpg" } 
								/>
								<h5>{ this.props.edit.searchData.user_name }</h5>
								<h6 onClick={ this.confirmAdd.bind(this) }>Send Request</h6>
							</div>
						) : null
					}
				</section>
			);
		} else if (this.props.edit.showTransfer) {
			popContainer = (<div id="pop-back"></div>);
			popAction = (
				<section id="pop-action">
					<h5 id="pop-action-close" onClick={ this.popupOwnership.bind(this) }>✗</h5>
					<h4 id="pop-action-title">Are you sure you want to transfer ownership?</h4>
					<h5 id="pop-action-warn">
						Once you transfer ownership to relative, you won′t be able to resume it yourself.
					</h5>
					<Confirmdel 
						message="Transfer Ownership" 
						confirmDel={ this.confirmTransfer.bind(this) } 
						fontFamily="'Rubik', sans-serif"
					/>
				</section>
			);
		} else if (this.props.edit.showEnd) {
			popContainer = (<div id="pop-back"></div>);
			popAction = (
				<section id="pop-action">
					<h5 id="pop-action-close" onClick={ this.popupEnd.bind(this) }>✗</h5>
					<h4 id="pop-action-title">Are you sure you want to end this relationship?</h4>
					<h5 id="pop-action-warn">
						Once you end the relationship, you won′t be able to resume it yourself.
					</h5>
					<Confirmdel 
						message="End Relationship" 
						confirmDel={ this.confirmEnd.bind(this) } 
						fontFamily="'Rubik', sans-serif"
					/>
				</section>
			);
		}
		return (
			<main id="main">
				<h3>Update { this.props.edit.petName }′s profile:</h3>
			  <h6>{ this.props.edit.updateResult }</h6>
				<section id="main-contain">
					<Updateprofile 
						alt="Pet Profile" 
						src={ domainUrl + '/img/pet/' + this.props.match.params.id + '/0.png' } 
						width="200" 
						saveProfile={ this.saveProfile.bind(this) } 
						indicate="Update Avatar" 
						fontFamily="'Rubik', sans-serif" format="image/png" 
					/>  
					<div className="main-contain-holder">
						{ nameInput }
						<input 
							id="main-contain-holder-name" 
							className="main-contain-holder-button" 
							type="button" 
							value="Update Name" 
							onClick={ this.saveName.bind(this) } 
						/>
						{ relationBoard }
					</div>
				</section>
				{ popContainer }
				{ popAction }
			</main>
		);
	}
}

export default connect(
  (state) => ({ edit: state.edit, account: state.account }),
  { 
		readEditPage, changeEditUpdate, updateEditName, updateEditProfile, changeEditRemove,
		deleteEditRelative, changeEditAdd, resetEditSearch, readEditSearch, createEditRelative,
		changeEditOwnership, updateEditTransfer, changeEditEnd, updateEditRelation
	}
)(Edit);