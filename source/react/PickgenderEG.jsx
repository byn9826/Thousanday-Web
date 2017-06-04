import React, {Component} from 'react';
import {Pickgender} from 'thousanday-react';
class PickgenderEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            choice: 2
		};
	}
    chooseGender(choice) {
        this.setState({choice: choice});
    }
    render() {
        let choice;
        if (this.state.choice == 0) {
            choice = "Male";
        } else if (this.state.choice == 1) {
            choice = "Female";
        }
        return (
            <section id = "pickgender" className = "example">
                <header className = "example-header">
                    <h2>Pickgender</h2>
                    <h3>Let user pick a gender</h3>
                </header>
                <span className="example-span">
                    {"<Pickgender /> "}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Display male and female symbol<br/>
                    2. Return user's choice after click<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <h4>You picked {choice}</h4>
                <Pickgender chooseGender={this.chooseGender.bind(this)} />
                <h4>
                    <a href = "https://github.com/byn9826/Thousanday-React#pickgender" target = "__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default PickgenderEG;
