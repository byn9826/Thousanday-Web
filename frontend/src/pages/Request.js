import React, {Component} from "react"
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { 
	readRequestPage, updateRequestUser
} from '../redux/actions/request';
import { domainUrl } from '../helpers/config';
import '../styles/request.css';

class Request extends Component {
	componentDidMount() {
    this.props.readRequestPage(this.props.account.id);
  }
	acceptRequest(pet, index) {
		this.props.updateRequestUser(
			pet, 
			index,
			this.props.account.id,
			this.props.account.token,
			1
		);
	}
	deleteRequest(pet, index) {
		this.props.updateRequestUser(
			pet, 
			index,
			this.props.account.id,
			this.props.account.token,
			0
		);
	}
  render() {
		if (this.props.account.id === null) {
			return <Redirect to={ '/403' } />;
		}
		const requestsInfo = this.props.request.requestData.map((request, index) =>
			<div key={ "requestlist" + index } className="main-contain">
				<a href={ "/user/" + request.sender_id } target="_blank">
					<img alt="Sender" src={ domainUrl + "/public/user/" + request.sender_id + ".jpg" } />
				</a>
				<h5>wants to add you as</h5>
				<a href={"/pet/" + request.pet_id} target="_blank">
					<img alt="Sender" src={ domainUrl + "/public/pet/" + request.pet_id + "/0.png" } />
				</a>
				<h5>'s relative.</h5>
				<input 
					type="button" 
					onClick={ this.acceptRequest.bind(this, request.pet_id, index) } 
					value="Accept" 
					style={{ border: "2px solid #ef8513" }} 
				/>
				<input 
					type="button" 
					onClick={ this.deleteRequest.bind(this, request.pet_id, index) } 
					value="Delete" 
					style={{ border: "2px solid #abaeb2" }} 
				/>
				<h6>{ request.request_time }</h6>
			</div>
		);
    return (
      <main id="main">
				<h3>All Requests:</h3>
				{ requestsInfo }
			</main>
    );
  }
}

export default connect(
  (state) => ({ request: state.request, account: state.account }),
  { readRequestPage, updateRequestUser }
)(Request);