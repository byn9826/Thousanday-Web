import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readHomeMoments } from '../redux/actions/home';
import { readAccountData } from '../redux/actions/account';
import { 
	domainUrl, androidStoreUrl, googleClientId, facebookClientId 
} from '../helpers/config';
import Waterfall from '../components/Waterfall';
import Googlelogin from '../components/Googlelogin';
import Facebooklogin from '../components/Facebooklogin';
import '../styles/public.css';

class Home extends Component {
  componentDidMount() {
    this.props.readHomeMoments(this.props.home.load);
  }
	gLogin(detail) {
		if (this.props.account.id === null) {
			this.props.readAccountData('google', detail);
		}
	}
	fLogin(response, token) {
		if (this.props.account.id === null) {
			this.props.readAccountData('facebook', { response, token });
		}
	}
  loadMore() {
    //this.props.readHomeMoments(this.props.home.load);
  }
  render() {
		//login board
		let loginBoard;
		if (this.props.account.id === null) {
			loginBoard = (
				<section id="main-login">
					<h6>Sign in or sign up</h6>
					<h6>by your Facebook or Google account:</h6>
					<div>
						<Googlelogin 
							clientId={ googleClientId } 
							width={ window.innerWidth >= 290 ? '200px' : '120px' }
							gLogin={ this.gLogin.bind(this) } 
						/>
						<Facebooklogin 
							clientId={ facebookClientId }
							width={ window.innerWidth >= 290 ? '194px' : '114px' } 
							fLogin={ this.fLogin.bind(this) } 
						/>
					</div>
				</section>
			)
		} else {
			//show welcome box if users logged in
			loginBoard = (
				<section id="main-welcome">
					<a href={"/user/" + this.props.account.id}>
						<img 
							alt="User Avatar" 
							src={domainUrl + "/img/user/" + this.props.account.id + ".jpg"} 
						/>
					</a>
					<h4>Welcome back! {this.props.account.name}</h4>
				</section>
			)
		}
    //load more moment button
    let loadButton;
		if (!this.props.home.locker) {
			loadButton = (
				<h6 id="load-button" onClick={ this.loadMore.bind(this) }>
					Load more ...
				</h6>
			);
		}
    return ([
      <main id="main" key="main">
        <h1>Meet with pets</h1>
        <h2>around the world everyday!</h2>
				{ loginBoard }
        <h6 id="main-app">Get the mobile app</h6>
        <a href={ androidStoreUrl } target="_blank">
          <img 
						className="main-mobile" 
						alt="Google Play" 
						src="./public/img/google-play.png"
					/>
        </a>
      </main>,
      <aside id="aside" key="aside">
        <Waterfall 
          column={ window.innerWidth > 900 ? '3' : '2' } 
          image={ this.props.home.data } 
          fontFamily="'Rubik', sans-serif" 
        />
        { loadButton }
      </aside>
    ]);
  }
}

export default connect(
  (state) => ({ home: state.home, account: state.account }),
  { readHomeMoments, readAccountData }
)(Home);