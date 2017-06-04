import React, {Component} from 'react';
import {Waterfall} from "thousanday-react";
class WaterfallEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            click:""
		};
	}
    clickNumber(index) {
        this.setState({click: index});
    }
    render() {
        let images = [
            ["/img/example/1.jpeg", "I'm a beauty guy with long legs", "#"],
            ["/img/example/2.jpeg", "Boring, sleep", "#"],
            ["/img/example/3.jpeg", "Unhappy", "#"],
            ["/img/example/4.jpeg", "I'm sunflower", "#"],
            ["/img/example/5.jpeg", "Love the bed", "#"],
            ["/img/example/1.jpeg", "Leave me alone", "#"],
            ["/img/example/2.jpeg", "I'm a beauty guy with long legs", "#"]
        ];
        return (
            <section id = "waterfall" className = "example">
                <header className = "example-header">
                    <h2>Waterfall</h2>
                    <h3>Responsive Pinterest Style Image Gallery</h3>
                </header>
                <span className="example-span">
                    {"<Waterfall column='3' image={images} />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Automatically layout all the images based on the “column” param<br/>
                    2. Show related message above each image when mouse hover.<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                    Show Images by 3 columns.<br/>
                </h4>
                <Waterfall column="3" image={images} fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#waterfall" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default WaterfallEG;