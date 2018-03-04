import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMomentData } from '../redux/actions/moment';
import { showMomentDelete } from '../redux/actions/moment';
import { fetchAccountData } from '../redux/actions/account';
import { domainUrl } from '../helpers/config';
import Like from '../components/Like';
import Inputarea from '../components/Inputarea';
import '../styles/moment.css';

class Moment extends Component {
	componentWillMount() {
		this.props.fetchAccountData();
	}
	componentDidMount() {
		this.props.loadMomentData(this.props.match.params.id);
	}
	showConfirm() {
		this.props.showMomentDelete();
	}
	confirmDelete() {
		
	}
	sharePage() {
		
	}
	changeLike() {
		
	}
	sendComment() {
		
	}
	render() {
		let likeButton, commentArea, deleteButton;
		if (this.props.account.id !== null) {
			likeButton = <Like 
				key={ 
					this.props.moment.likeData.indexOf(this.props.account.id) === -1 ? 'false' : 'true' 
				}
				liked={ 
					this.props.moment.likeData.indexOf(this.props.account.id) === -1 ? 'false' : 'true' 
				}
				interact="true" 
				agree={ this.props.moment.likeData.length } 
				newTotal={ this.changeLike.bind(this) }
			/>
			commentArea = (
				<div>
					<Inputarea ref="newComment" content="" max="150" />
					<h6>{ this.props.moment.commentError }</h6>
					<h6 id="aside-leave" onClick={ this.sendComment.bind(this) }>Comment</h6>
				</div>
			);
			if (this.props.moment.familyData.indexOf(this.props.account.id) !== -1) {
				deleteButton = <h6 onClick={ this.showConfirm.bind(this) }>Delete</h6>;
			}
		} else {
			likeButton = <Like 
				interact="false" 
				agree={ this.props.moment.likeData.length } 
				liked="false"
			/>
		}
		let confirmButton;
		if (this.props.moment.showConfirm) {
			confirmButton = (
				<input type="button" value="Confirm ?" onClick={ this.confirmDelete.bind(this) } />
			);
		}
		return ([
			<main id="main" key="main">
				<img 
					alt="Moment Image" 
					src={
						domainUrl + "/img/pet/" + this.props.moment.momentData.pet_id + 
						"/moment/" + this.props.moment.momentData.image_name
					} 
				/>
        <h5>
					{
						this.props.moment.momentData.moment_date ? 
							new Date(this.props.moment.momentData.moment_date).toISOString().substring(0, 10) :
							null
					}
				</h5>
				{ deleteButton }
				{ confirmButton }
			</main>,
			<aside id="aside" key="aside">
				<section id="aside-talk">
					<a href={"/pet/" + this.props.moment.momentData.pet_id}>
						<img 
							alt="Pet" 
							src={ domainUrl + "/img/pet/" + this.props.moment.momentData.pet_id + "/0.png" } 
						/>
					</a>
					<h4>{ this.props.moment.momentData.moment_message }</h4>
				</section>
				<section id="aside-social">
					{ likeButton }
					<img 
						id="fb-share-button" 
						onClick={ this.sharePage.bind(this) } 
						alt="share" 
						src="../public/img/facebook-share.png"
					/>
				</section>
				{ commentArea }
			</aside>
		]);
	}
}

export default connect(
  (state) => ({ account: state.account, moment: state.moment }),
  { loadMomentData, fetchAccountData, showMomentDelete }
)(Moment);

