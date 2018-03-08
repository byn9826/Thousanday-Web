import React, {Component} from 'react';
import {Inputarea} from 'thousanday-react';
class InputareaEG extends Component {
    render() {
        return (
            <section  id = "inputarea" className = "example">
                <header className = "example-header">
                    <h2>Inputarea</h2>
                    <h3>Textarea with characters couting and restriction</h3>
                </header>
                <span className="example-span">
                    {"<Inputarea content='' max='150' />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Counting inputarea characters<br/>
                    2. Restrict input after reaching maximun characters<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Inputarea content = "Let's count the content" max = "150" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#inputarea" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default InputareaEG;