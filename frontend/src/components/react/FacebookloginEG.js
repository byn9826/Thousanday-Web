import React, {Component} from 'react';
import {Facebooklogin} from 'thousanday-react';
class FacebookloginEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            name: ""
        };
	}
    fLogin(response) {
        this.setState({name: response.name});
        console.log(response);
	}
    render() {
        let imageStyle = {
            display: "block",
            width: "30%"
        };
        return (
            <section id="facebooklogin" className="example">
                <header className="example-header">
                    <h2>Facebooklogin</h2>
                    <h3>Button for Facebook Login</h3>
                </header>
                <span className="example-span">
                    {"<Facebooklogin clientId={id} />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Show Facebook Login button<br/>
                    2. Get users name and id after users successfully login<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
				<Facebooklogin clientId="447688265576125" fLogin={this.fLogin.bind(this)} width="200px" />
                <h4>{"Hello, " + this.state.name}</h4>
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#facebooklogin" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default FacebookloginEG;