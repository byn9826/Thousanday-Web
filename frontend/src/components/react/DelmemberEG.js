import React, {Component} from 'react';
import {Delmember} from 'thousanday-react';
class DelmemberEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            index:null
		};
	}
    clickDel(index) {
        this.setState({index: index});
    }
    render() {
        return (
            <section id="delmember" className="example">
                <header className="example-header">
                    <h2>Delmember</h2>
                    <h3>Disapear images with shake effect</h3>
                </header>
                <span className="example-span">
                    {"<Delmember profile={'0.jpg'} index={0} clickDel={this.clickDel.bind(this)} />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Show a delete button on top-right corner of the image<br/>
                    2. Image shakes after users click it then diaspear<br/>
                    3. Return index to indicate which image has been clicked<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                    You deleted the profile with index: {this.state.index}
                </h4>
                <Delmember profile={"/public/reactUI/6.png"} index={0} clickDel={this.clickDel.bind(this)} width="80" height="80" fontFamily="'Rubik', sans-serif" />
                <Delmember profile={"/public/reactUI/7.jpg"} index={1} clickDel={this.clickDel.bind(this)} width="80" height="80" fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#random" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default DelmemberEG;