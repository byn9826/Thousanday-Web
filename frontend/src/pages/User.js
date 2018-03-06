import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readUserPage, readUserMoments } from '../redux/actions/user';
import { changeAccountData } from '../redux/actions/account';
import { domainUrl } from '../helpers/config';
import { noGetGender, noGetType } from '../helpers/noToInfo';
import Waterfall from '../components/Waterfall';
import '../styles/user.css';

class User extends Component {
	componentWillMount() {
		this.props.changeAccountData(
			[
				localStorage.getItem('id'), 
				localStorage.getItem('name'),
				localStorage.getItem('token')
			]
		);
	}
  componentDidMount() {
		this.props.readUserPage(this.props.match.params.id);
  }
	loadMore() {
		this.props.readUserMoments(this.props.user.belongData, this.props.user.load);
	}
  render() {
		const relativeBoard = this.props.user.relativeData.map((relative, index) =>
			<a href={ "/user/" + relative }  key={ "userRelative" + index }>
				<img src={ domainUrl + "/img/user/" + relative + ".jpg" } />
			</a>
		);
		let addButton;
		if (this.props.user.userData.user_id === this.props.account.id) {
			addButton = (
				<a href="/add">
					<h5 id="aside-header-add">Add Pet</h5>
				</a>
			);
		}
		const petsList = this.props.user.petsData.map((pet, index) =>
			<div key={ "userPet" + index } className="aside-pet">
				<a href={ "/pet/" + pet.pet_id }>
					<img alt={ pet.pet_name } src={ domainUrl + "/img/pet/" + pet.pet_id + "/0.png" } />
				</a>
				<h5>{ pet.pet_name }</h5>
				<div className="aside-pet-info">
					<h6>{ noGetGender(pet.pet_gender) }</h6>
					<h6>{ noGetType(pet.pet_type) }</h6>
				</div>
				{
					this.props.user.userData.user_id === this.props.account.id ? (
						<a href={ "/edit/" + pet.pet_id }><h6 className="aside-pet-edit">Edit</h6></a>
					) : null
				}
			</div>
		);
		let emptyMessage;
		if (this.props.user.momentData.length === 0) {
			emptyMessage = (
				<h6 className="aside-no">Not moments yet ...</h6>
			);
		}
		const galleryBoard = <Waterfall 
			column={ window.innerWidth > 900 ? "3" : "2" }
			image={ this.props.user.momentData } 
			fontFamily="'Rubik', sans-serif" 
		/>
		let loadButton;
		if (!this.props.user.locker) {
			loadButton = (
				<h6 id="load-button" onClick={ this.loadMore.bind(this) }>
					Load more ...
				</h6>
			);
		}
    return ([
      <main id="main" key="main">
				<img 
					id="main-profile" 
					alt={ this.props.user.userData.user_name} 
					src={ domainUrl + "/img/user/" + this.props.user.userData.user_id + ".jpg" } 
				/>
				<h1 className="main-name">{ this.props.user.userData.user_name }</h1>
				<h5 className="main-name">{ this.props.user.userData.user_about }</h5>
				<h5 className="main-name">- User { this.props.user.userData.user_id } -</h5>
				<h5 id="main-relative">Relatives:</h5>
				<div id="main-family">
					{ relativeBoard }
				</div>
			</main>,
			<aside id="aside" key="aside">
				<div className="aside-header">
					<img alt="pets hub" src="/public/icon/glyphicons-hub.png" />
					<h4>Pets in hub</h4>
					{ addButton }
				</div>
				{ petsList }
				<div className="aside-header">
					<img alt="pets moment" src="/public/icon/glyphicons-moment.png" />
					<h4>Moments</h4>
				</div>
				{ emptyMessage }
				{ galleryBoard }
				{ loadButton }
			</aside>
    ]);
  }
}

export default connect(
  (state) => ({ account: state.account, user: state.user }),
  { 
		readUserPage, changeAccountData, readUserMoments
	}
)(User);