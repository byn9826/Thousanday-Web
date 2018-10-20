import React, {Component} from "react"
import Inputbox from '../components/Inputbox';
import Updateprofile from '../components/Updateprofile';
import Urltoprofile from '../components/Urltoprofile';
import { domainUrl, createNewUserApi } from '../helpers/config';
import processError from '../helpers/processError';
import '../styles/signup.css';

export default class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//store user id
			id: null,
			//store user platform
			platform: null,
			//store user name
			name: null,
			//store user token
			token: null,
			//store user avatar
			avatar: null,
			//store uploaded avatar
			newAvatar:null,
			//indicate accept term or not
			terms: false,
			//indicate error message
			error: null
		};
	}
	//get user data if user logged in
	componentWillMount() {
		if (localStorage.getItem("newId")) {
			const id = localStorage.getItem("newId");
			const name = localStorage.getItem("newName");
			const token = localStorage.getItem("newToken");
			const platform = localStorage.getItem("newPlatform");
			const avatar = localStorage.getItem("newAvatar");
			this.setState({ id, name, token, platform, avatar });
		} else {
			window.location.replace("/403");
		}
	}
	saveProfile(newAvatar) {
		this.setState({ newAvatar });
	}
	checkTerm() {
		this.setState({ terms: !this.state.terms });
	}
	signUp() {
		const name = this.refs.userName.state.content.trim();
		if (name == "") {
			//name can't be empty
			this.setState({ error: "User Name can′t be empty in step one." });
		} else if (!this.state.newAvatar && !this.refs.userAvatar.state.data) {
			//must have a profile image
			this.setState({ error: "Please upload an avatar in step two." });    
		} else if (!this.state.terms) {
			//must check terms
			this.setState({ error: "Please agree to our terms and privacy policy." });   
		} else {
			const avatar = this.state.newAvatar ? 
				this.state.newAvatar : this.refs.userAvatar.state.data;
			let fileData = new FormData();
			fileData.append("file", avatar, "0.jpg");
			fileData.append("name", name);
			fileData.append("id", this.state.id);
			fileData.append("token", this.state.token);
			fileData.append("platform", this.state.platform);
			fileData.append("method", "website");
			fetch(domainUrl + createNewUserApi, {
				method: 'POST',
				mode: 'cors',
				headers: {
					Accept: 'application/json'
				},
				processData: false,
				body: fileData
			})
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					processError(response.status);
				})
				.then(result => {
					localStorage.clear();
					localStorage.setItem("id", result[0]);
					localStorage.setItem("name", name);
					localStorage.setItem("token", result[1]);
					//login success, go to homepage
					window.location.replace("/user/" + result[0]);
				});
		}
	}
	render() {
		return (
			<main id="main">
				<h1>Create Account</h1>
				<h4>Hello, { unescape(this.state.name) }. Let′s start creating a new account for your!</h4>
				<h4 className="main-title">Step 1: Set up your nickname</h4>
				<Inputbox 
					ref="userName" 
					content={ unescape(this.state.name) } 
					max="10" 
					width="30%" 
					fontFamily="'Rubik', sans-serif" 
				/>
				<h4 className="main-title">Step 2: Choose your avatar</h4>
				<div className="main-profile">
					<h5>Use your { this.state.platform } profile</h5>
					<Urltoprofile ref="userAvatar" url={ this.state.avatar } />
				</div>
				<div className="main-profile">
					<h5>Or upload a new avatar</h5>
					<Updateprofile width="200" saveProfile={ this.saveProfile.bind(this) } format="image/jpg" />
				</div>
				<h4 className="main-title">Step 3: Agree to our Terms & Privacy Policy</h4>
				<h5 id="main-terms">
					<a href="/terms" target="__blank">Terms & Privacy Policy @ Smilings.me</a>
				</h5>
				<div id="main-check">
					<input type="checkbox" checked={ this.state.terms } onClick={ this.checkTerm.bind(this) }/>
					<h6>By signing up, you agree to our Terms & Privacy Policy.</h6>
				</div>
				<h4 className="main-title">Finally, confirm signup</h4>
				<h6 id="main-error">{ this.state.error }</h6>
				<input 
					id="main-confirm" 
					type="button" 
					value={ 
						this.state.platform === "google" ? 
							"SIGN UP WITH GOOGLE" : "SIGN UP WITH FACEBOOK"
					} 
					onClick={ this.signUp.bind(this) }
				/>
			</main>
		);
	}
}