import React, {Component} from 'react';
import {Postimg} from 'thousanday-react';
class PostimgEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            //use to trigger reset Postimg
            reset: 0,
		};
	}
    submitImg(message, image) {
        let reset = this.state.reset + 1;
		this.setState({reset: reset});
    }
    render() {
        return (
            <section id = "postimg" className = "example">
                <header className = "example-header">
                    <h2>Postimg</h2>
                    <h3>Post Panel to send message with image</h3>
                </header>
                <span className="example-span">
                    {'<Postimg content="" max="150" title="New post" />'}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Automatically calc and restrict user's input according to "max" param<br/>
                    2. Show error message when there's no content or no image or file type is not image.<br/>
                    3. Preview selected image<br/>
                </h4>
                <h4>
                    <b>Notice:</b><br/>
                    This component used a GLYPHICONS png under CC BY 3.0 License<br/>
                    <a href="https://segmentfault.com/a/1190000000754560">Reference</a><br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Postimg content="" max="150" title="New post" width="80%" reset={this.state.reset}  submitImg={this.submitImg.bind(this)} fontFamily="'Rubik', sans-serif"/>
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#postimg" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default PostimgEG;