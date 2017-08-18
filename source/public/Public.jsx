/*global localStorage*/

import React, { Component } from "react";
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Waterfall from "../component/Waterfall";
import Googlelogin from "../component/Googlelogin";
import Facebooklogin from "../component/Facebooklogin";
import processGallery from "../js/processGallery.js";
import processError from "../js/processError.js";

class Public extends Component {
	constructor( props ) {
        super( props );
		this.state = {
            //store images for public moments
            images: [],
            //store user id
            userId: null,
            //store user name
            userName: null,
            //store load images for how many times
            loader: 1,
            //indicate lock load more button or not
            locker: false
		};
	}
    componentWillMount() {
        //get stored user id, name from local, and treat as logged in user
        if ( localStorage.getItem( "id" ) ) {
            let id = localStorage.getItem( "id" );
            let name = localStorage.getItem( "name" );
            this.setState({ userId: id, userName: name });
        }
        //load 20 most recent moments
        reqwest({
            url: "/index/read?load=0",
            method: "GET",
            success: function( result ) {
                result = JSON.parse( result );
                let images = processGallery( result );
                this.setState({ images: images });
            }.bind( this ),
            error: function( err ) {
                processError( err );
            }
        });
    }
    //load more public recent moments
    loadMore() {
        if ( !this.state.locker ) {
            reqwest({
                url: "/index/read?load=" + this.state.loader,
                method: "GET",
                success: function( result ) {
                    result = JSON.parse( result );
                    let images = processGallery( result );
                    let combine = this.state.images.concat( images );
                    if (result.length === 20) {
                        this.setState({ images: combine, loader: this.state.loader + 1 });
                    } else {
                        //disable load more button when there's no more moments
                        this.setState({ images: combine, loader: this.state.loader + 1, locker: true });
                    }
                }.bind( this ),
                error: function ( err ) {
                    processError( err );
                }
            });
        }
    }
    //user click google login button
	gLogin( user ) {
		//works only when user not login
		if ( !this.state.userId ) {
			//check google user token
			reqwest({
				url: "/account/google",
				type: "json",
				contentType: "application/json",
				method: "POST",
				data: JSON.stringify({ "token": user.token, "platform": "website" }),
				success: function( result ) {
                    localStorage.setItem( "id", result[0] );
                    localStorage.setItem( "name", result[1] );
                    localStorage.setItem( "token", result[2] );
					//login success, go to homepage
					window.location.replace( "/user/" + result[0] );
				},
				error: function( err ) {
					processError( err );
				}
			});
		}
    }
	//user click facebook login button
	fLogin( response, token ) {
		if ( !this.state.userId ) {
			//check google user token
			reqwest({
				url: "/account/facebook",
				type: "json",
				contentType: "application/json",
				method: "POST",
				data: JSON.stringify({ "token": token, "platform": "website" }),
				success: function( result ) {
                    localStorage.setItem( "id", result[0] );
                    localStorage.setItem( "name", result[1] );
                    localStorage.setItem( "token", result[2] );
					//login success, go to homepage
					window.location.replace( "/user/" + result[0] );
				},
				error: function( err ) {
					processError( err );
				}
			});
		}
	}
	render() {
        let login;
        if ( !this.state.userId ) {
            //show login box if users didn't logged in
            login = (
                <section id="main-login">
                    <h6>Sign in or sign up</h6>
                    <h6>by your Facebook or Google account:</h6>
                    {
                        window.innerWidth >= 290 ? (
                            <div>
                                <Googlelogin 
                                    clientId="168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com" 
                                    width="200px" gLogin={ this.gLogin.bind(this) } 
                                />
            					<Facebooklogin 
            					    fLogin={ this.fLogin.bind( this ) } clientId="447688265576125" width="194px" 
            					/>
                            </div>
                        ) : (
                            <div>
                                <Googlelogin 
                                    clientId="168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com" 
                                    width="120px" gLogin={ this.gLogin.bind(this) } 
                                />
            					<Facebooklogin 
            					    fLogin={ this.fLogin.bind( this ) } clientId="447688265576125" width="114px" 
            					/>
                            </div>
                        )
                    }
                </section>
            )
        } else {
            //show welcome box if users logged in
            login = (
                <section id="main-welcome">
                    <a href={ "/user/" + this.state.userId }>
                        <img alt="User Avatar" src={ "/img/user/" + this.state.userId + ".jpg" } />
                    </a>
                    <h4>Welcome back! { this.state.userName }</h4>
                </section>
            )
        }
        let load;
        //show load more button
        if ( !this.state.locker ) {
            load = (
                <h6 id="load-button" onClick={ this.loadMore.bind( this ) }>
                    Load more ...
                </h6>
            );
        }
        //show moments gallery
        let gallery;
		if ( window.innerWidth > 900 ) {
            gallery = <Waterfall column="3" image={ this.state.images } fontFamily="'Rubik', sans-serif" />
        } else if ( window.innerWidth > 450 ) {
			gallery = <Waterfall column="2" image={ this.state.images } fontFamily="'Rubik', sans-serif" />
		} else {
            gallery = <Waterfall column="1" image={ this.state.images } fontFamily="'Rubik', sans-serif" />
        }
		return (
			<div id="react-root">
                <Header 
                    userId={ this.state.userId ? this.state.userId : null } 
                    userName={ this.state.userName ? this.state.userName : "Login" } />
                <main id="main">
                    <h1>Meet with pets</h1>
                    <h2>around the world everyday!</h2>
                    { login }
                    <h6 id="main-app">Get the mobile app</h6>
                    <a href="https://play.google.com/store/apps/details?id=com.thousanday" target="_blank" >
                        <img className="main-mobile" alt="Google Play" src="/img/icon/google-play.png" />
                    </a>
                </main>
                <aside id="aside">
                    { gallery }
                    { load }
                </aside>
                <Footer />
			</div>
		);
	}
}

ReactDOM.render( <Public />, document.getElementById( "root" ) );