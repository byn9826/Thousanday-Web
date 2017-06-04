import React, {Component} from 'react';
import {Selectbox} from 'thousanday-react';
class SelectboxEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            first: "",
            second: "",
            options: [
                ["member0", "/img/example/6.png", "I'm member 0"],
                ["member1", "/img/example/6.png", "I'm member 1"],
                ["member2", "/img/example/6.png", "I'm member 2"],
                ["member3", "/img/example/6.png", "I'm member 3"],
                ["member4", "/img/example/6.png", "I'm member 4"],
                ["member5", "/img/example/6.png", "I'm member 5"]
            ]
		};
	}
    closeBox(choice, changed) {
        if (changed) {
            let first, second;
            if (choice.length > 0) {
                first = this.state.options[choice[0]][0];
            }
            if (choice.length > 1) {
                second = this.state.options[choice[1]][0];
            }
            this.setState({first: first, second: second});
        }
    }
    render() {
        return (
            <section id="selectbox" className="example">
                <header className="example-header">
                    <h2>Selectbox</h2>
                    <h3>Select members from list of options</h3>
                </header>
                <span className="example-span">
                    {"<Selectbox options={options} />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Show list of options with name, profile, message from an array<br/>
                    2. Return index of members in the option array, after users confirm choice<br/>
                    3. Know if users changed their default choice<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <h4>You have selected {this.state.first} {this.state.second} (by click X)</h4>
                <Selectbox options={this.state.options} max="2" closeBox={this.closeBox.bind(this)} width="90%" fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#selectbox" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default SelectboxEG;