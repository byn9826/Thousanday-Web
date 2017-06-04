import React, {Component} from 'react';
import {Inputbox} from 'thousanday-react';
class InputboxEG extends Component {
    render() {
        return (
            <section id = "inputbox" className = "example">
                <header className = "example-header">
                    <h2>Inputbox</h2>
                    <h3>Text input with characters couting and restriction</h3>
                </header>
                <span className="example-span">
                    {"<Inputbox content='' max='30' font='15px' hint='Show hint' />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Counting input characters<br/>
                    2. Restrict input after reaching maximun characters<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Inputbox content="" max="30" font="15px" hint="Try to use it" fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#inputbox" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default InputboxEG;