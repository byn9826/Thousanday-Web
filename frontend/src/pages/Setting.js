import React, {Component} from "react"
import { connect } from 'react-redux';
import { 
	readSettingPage, updateSettingAbout, updateSettingName, createSettingProfile
} from '../redux/actions/setting';
import { domainUrl } from '../helpers/config';
import Updateprofile from '../components/Updateprofile';
import Inputbox from '../components/Inputbox';
import '../styles/setting.css';

class Setting extends Component {
	componentDidMount() {
    this.props.readSettingPage(this.props.account.id);
  }
	saveProfile(file) {
		this.props.createSettingProfile(
			this.props.account.id,
			this.props.account.token,
			file
		);
	}
	saveName() {
		const userName = this.refs.userName.state.content.trim();
    if (userName !== this.props.account.name) {
			this.props.updateSettingName(
				this.props.account.id,
				this.props.account.token,
				userName
			);
		}
	}
	saveAbout() {
		const userAbout = this.refs.userAbout.state.content.trim();
    if (userAbout !== this.props.setting.userAbout) {
			this.props.updateSettingAbout(
				this.props.account.id,
				this.props.account.token,
				userAbout
			);
		}
	}
	render() {
		let profileBoard;
		if (this.props.setting.userData.user_id) {
			profileBoard = <Updateprofile 
				alt="User Profile" 
				src={ domainUrl + "/img/user/" + this.props.setting.userData.user_id + ".jpg" } 
				width="200" 
				saveProfile={ this.saveProfile.bind(this) } 
				indicate="Update Avatar" 
				fontFamily="'Rubik', sans-serif" 
			/>
		}
		return (
			<main id="main">
				<h3>Update your profile:</h3>
				<h6>{ this.props.setting.updateResult }</h6>
				<section id="main-contain">
					{ profileBoard }
					<div className="main-contain-holder">
						<Inputbox 
							ref="userName" 
							content={ this.props.account.name }  
							max="10" 
							width="250px" 
							fontFamily="'Rubik', sans-serif" 
						/>
						<input 
							id="main-contain-holder-name" 
							className="main-contain-holder-button" 
							type="button" 
							value="Update Name" 
							onClick={ this.saveName.bind(this) } 
						/>
						<Inputbox 
							ref="userAbout" 
							key={ this.props.setting.userAbout ? 'about1' : 'about2' }  
							content={ this.props.setting.userAbout ? this.props.setting.userAbout : '' } 
							max="30" 
							width="250px" 
							fontFamily="'Rubik', sans-serif" 
						/>
						<input 
							className="main-contain-holder-button" 
							type="button" 
							value="Update Mood" 
							onClick={ this.saveAbout.bind(this) } 
						/>
					</div>
				</section>
			</main>
		);
	}
}

export default connect(
  (state) => ({ setting: state.setting, account: state.account }),
  { 
		readSettingPage, updateSettingAbout, updateSettingName, createSettingProfile
	}
)(Setting);