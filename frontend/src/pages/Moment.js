import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { 
	readMomentPage, showMomentDelete, deleteMomentPage, updateMomentLike, readMomentComments,
	showCommentEmpty, createMomentComment
} from '../redux/actions/moment';
import { domainUrl } from '../helpers/config';
import Like from '../components/Like';
import Inputarea from '../components/Inputarea';
import Commentlist from '../components/Commentlist';
import '../styles/moment.css';

class Moment extends Component {
	componentDidMount() {
		this.props.readMomentPage(this.props.match.params.id);
	}
	showConfirm() {
		this.props.showMomentDelete();
	}
	confirmDelete() {
		this.props.deleteMomentPage(
			this.props.account.id,
			this.props.account.token,
			this.props.match.params.id,
			this.props.moment.momentData.pet_id
		);
	}
// 	sharePage() {
// 		FB.ui({
// 			display: 'popup',
// 			method: 'share_open_graph',
// 			action_type: 'og.shares',
// 			action_properties: JSON.stringify({
// 				object : {
// 					"og:url": location.href,
// 					"og:title": '"' + this.props.moment.momentData.moment_message + '"',
// 					"og:description": "Smilings.me - Homepage for your pets",
// 					"og:image": domainUrl + '/img/pet/' + this.props.moment.momentData.pet_id + 
// 						"/moment/" + this.props.moment.momentData.image_name
// 				}
// 			})
// 		});
// 	}
	changeLike(action) {
		this.props.updateMomentLike(
			this.props.account.id,
			this.props.account.token,
			this.props.match.params.id,
			action
		);
	}
	sendComment() {
		//comment content can't be empty
		let content = this.refs.newComment.state.content.trim();
		if (content === "") {
			this.props.showCommentEmpty();
		} else {
			this.refs.newComment.setState({content: ""});
			this.props.createMomentComment(
				this.props.account.id,
				this.props.account.token,
				this.props.match.params.id,
				content
			);
		}
	}
	loadComment() {
		this.props.readMomentComments(
			this.props.match.params.id,
			this.props.moment.commentLoad,
			this.props.moment.commentAdded
		);
	}
	render() {
		if (this.props.moment.redirectUser) {
      return <Redirect to={ '/user/' + this.props.account.id } />;
    }
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
				</section>
				<Commentlist 
					data={ this.props.moment.commentData } 
					locker={ this.props.moment.commentLocker } 
					loadMore={ this.loadComment.bind(this) } 
					fontFamily="'Rubik', sans-serif" 
				/>
				{ commentArea }
			</aside>
		]);
	}
}

export default connect(
  (state) => ({ account: state.account, moment: state.moment }),
  { 
		readMomentPage, showMomentDelete, deleteMomentPage, updateMomentLike, readMomentComments,
		showCommentEmpty, createMomentComment
	}
)(Moment);

