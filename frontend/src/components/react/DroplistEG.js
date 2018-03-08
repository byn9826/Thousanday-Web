import React, {Component} from 'react';
import {Droplist} from 'thousanday-react';
class DroplistEG extends Component {
    render() {
        let options = [
            "1st choice",
            "2nd choice",
            "3rd choice",
            "4th choice"
        ];
        return (
            <section id="droplist" className="example">
                <header className="example-header">
                    <h2>Droplist</h2>
                    <h3>Use drop-down list to make decision</h3>
                </header>
                <span className="example-span">
                    {"<Droplist options='[option1,option2...]' />"}
                </span>
                <h4>
                    <b>Features:</b><br/>   
                    1. Show a list of options in drop-down list<br/>
                    2. Return choice chosen by users<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Droplist options={options} title="Make a decision" showTitle="true" changeValue={()=>{}} fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#droplist" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default DroplistEG;