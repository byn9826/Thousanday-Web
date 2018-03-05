import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	readPetPage, updatePetWatch, createPetMoment, readPetMoments, showAccountRequired 
} from '../redux/actions/pet';
import { changeAccountData } from '../redux/actions/account';
import { noGetGender, noGetType, noGetNature, noGetAbility } from '../helpers/noToInfo';
import { domainUrl } from '../helpers/config';
import Postimg from '../components/Postimg';
import Progress from '../components/Progress';
import Waterfall from '../components/Waterfall';
import '../styles/pet.css';

class Pet extends Component {
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
		this.props.readPetPage(this.props.match.params.id);
  }
	watchPet() {
		if (this.props.account.id === null) {
			this.props.showAccountRequired();
		} else {
			this.props.updatePetWatch(
				this.props.account.id,
				this.props.account.token,
				this.props.match.params.id,
				this.props.pet.watchData.indexOf(this.props.account.id) !== -1 ? 0 : 1
			);
		}
	}
	submitImg(message, image) {
		this.props.createPetMoment(
			this.props.account.id,
			this.props.account.token,
			this.props.match.params.id,
			image,
			message
		)
	}
	loadMore() {
		this.props.readPetMoments(
			this.props.match.params.id,
			this.props.pet.load,
			this.props.pet.add
		);
	}
  render() {
		let watchInfo;
		if (
			this.props.account.id !== null && 
			this.props.pet.watchData.indexOf(this.props.account.id) !== -1
		) {
			watchInfo = "Watched | by " + this.props.pet.watchData.length;
		} else {
			if (this.props.pet.loginRequired) {
				watchInfo = "Please Login";
			} else {
				watchInfo = "+ Watch | by " + this.props.pet.watchData.length;
			}
		}
		const familiesBoard = this.props.pet.familyData.map((family, index) =>
			<div key={ "petfamily" + index } className="main-owner">
				<a href={ "/user/" + family.user_id}>
					<img src = { domainUrl + "/img/user/" + family.user_id + ".jpg" } />
					<h5>{ family.user_name }</h5>
				</a>
			</div>
		);
    const friendsBoard = this.props.pet.friendData.map((friend, index) =>
			<div key={"petfriend" + index} className="main-friend">
				<a href={"/pet/" + friend.pet_id}>
					<img src = { domainUrl + "/img/pet/" + friend.pet_id + "/0.png" }  />
					<h6>{friend.pet_name}</h6>
				</a>
			</div>
		);
		let postBoard;
		if (
			this.props.account.id !== null && 
			(
				this.props.pet.petData.owner_id === this.props.account.id ||
				this.props.pet.petData.relative_id === this.props.account.id
			)
		) {
			postBoard = <Postimg 
				content="" 
				max="120" 
				title="Share new moment" 
				submitImg={ this.submitImg.bind(this) } 
				fontFamily="'Rubik', sans-serif" 
				reset={ this.props.pet.reset } 
			/>
		}
		const skillBoard = ['Attack', 'Defend', 'Health', 'Swift', 'Lucky'].map(skill =>
			<div key={ skill }>
				<h6>{ skill }</h6>
				<span>
					<Progress 
						progress={ this.props.pet.petData[skill.toLowerCase()] } 
						max="999" 
						percentage="false" 
					/>
				</span>
			</div>
		);
		const momentGallery = <Waterfall 
			column={ window.innerWidth > 900 ? 3 : 2 } 
			image={ this.props.pet.galleryData } 
			fontFamily="'Rubik', sans-serif" 
		/>
		let loadButton;
		if (!this.props.pet.locker) {
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
					alt={ this.props.pet.petData.pet_name } 
					src={ domainUrl + "/img/pet/" + this.props.pet.petData.pet_id + "/0.png" } 
				/>
				<div id="main-name">
						<h1>{ this.props.pet.petData.pet_name }</h1>
						<h4>{ noGetGender(this.props.pet.petData.pet_gender) }</h4>
				</div>
				<h5 id="main-watch" onClick={ this.watchPet.bind(this) }>{ watchInfo }</h5>
				<h5 id="main-nature">Nature: { noGetNature(this.props.pet.petData.pet_nature) }</h5>
				<h5 className="main-title">Type: { noGetType(this.props.pet.petData.pet_type) }</h5>
				<h5 className="main-title">
					Reg in hub:  
					{
						this.props.pet.petData.pet_reg ? 
							new Date(this.props.pet.petData.pet_reg).toISOString().substring(0, 10) : 
							null
					}
				</h5>    
				<div className="main-family">
						<img alt="Family" src="/public/icon/glyphicons-hub.png" />
						<h5>Family</h5>
				</div>
				{ familiesBoard }
				<div className="main-family">
					<img alt="friend" src="/public/icon/glyphicons-team.png" />
					<h5>Friends</h5>
				</div>
				{ friendsBoard }
			</main>,
			<aside id="aside" key="aside">
				{ postBoard }
				<div className="aside-title">
					<img alt="moments" src="/public/icon/glyphicons-skill.png" / >
					<h4>Ability</h4>
				</div>
				<div id="aside-ability">
					<div id="aside-ability-left">
						{ skillBoard }
					</div>
					<div id="aside-ability-right">
						<h4>
							Play & Win<br />
							{ this.props.pet.petData.win }
						</h4>
					</div>
				</div>
				<div className="aside-title">
					<img alt="moments" src="/public/icon/glyphicons-moment.png" / >
					<h4>Moments</h4>
				</div>
				{ momentGallery }
				{ loadButton }
			</aside>
    ]);
  }
}

export default connect(
  (state) => ({ account: state.account, pet: state.pet }),
  { 
		readPetPage, updatePetWatch, showAccountRequired, changeAccountData,
		readPetMoments, createPetMoment
	}
)(Pet);