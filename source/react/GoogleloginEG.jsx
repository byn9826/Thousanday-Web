import React, {Component} from 'react';
import {Googlelogin} from 'thousanday-react';
class GoogleloginEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            image: "",
            email: ""
        };
	}
    googleLogin(user) {
        console.log(user);
        this.setState({image: user.imageUrl, email: user.email});
    }
    render() {
        let imageStyle = {
            display: "block",
            width: "30%"
        };
        return (
            <section id="googlelogin" className="example">
                <header className="example-header">
                    <h2>Googlelogin</h2>
                    <h3>Button for Google Login</h3>
                </header>
                <span className="example-span">
                    {"<Googlelogin clientId={id} />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Show Google Login button<br/>
                    2. Get users information from user after login successfully<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Googlelogin gLogin={this.googleLogin.bind(this)} clientId="168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com" width="200px" />
                <h4>{"Hello, " + this.state.email}</h4>
                <img style={imageStyle} src={this.state.image} />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#glogin" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default GoogleloginEG;