import React, {Component} from 'react';
import {Confirmdel} from 'thousanday-react';
class ConfirmdelEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            result: "Not confirmed yet"
		};
	}
    confirmDel() {
        this.setState({result: "Confirmed!"});
    }
    render() {
        return (
            <section id="confirmdel" className="example">
                <header className = "example-header">
                    <h2>Confirmdel</h2>
                    <h3>Require user to confirm delete action by input</h3>
                </header>
                <span className="example-span">
                    {'<Confirmdel message="End Relationship" />'}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Require users to input the preset confirm message<br/>
                    2. Confirm button only available after the input is the same<br/>
                    3. Get call back when users click confirm button<br/>
                </h4>
                <h4><b>Demo:</b>Confirm your delete action: {this.state.result}</h4>
                <Confirmdel message="Confirm" confirmDel={this.confirmDel.bind(this)} fontFamily="'Rubik', sans-serif"/>
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#confirmdel" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default ConfirmdelEG;