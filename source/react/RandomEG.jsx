import React, {Component} from 'react';
import {Random} from 'thousanday-react';
class RandomEG extends Component {
    render() {
        let randomContent = [
            "Random output 1st in list",
            "Random output 2nd in list",
            "Random output 3rd in list",
            "Random output 4th in list"
        ];
        return (
            <section id="random" className="example">
                <header className="example-header">
                    <h2>Random</h2>
                    <h3>Show random content from a list of options</h3>
                </header>
                <span className="example-span">
                    {"<Random content='[content1,content2...]' font='h3' />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Randomly show content based on list of options<br/>
                    2. Insert content into a desired html tag<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Random content={randomContent} font="h3" />
                <Random content={randomContent} font="h3" />
                <Random content={randomContent} font="h3" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#random" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default RandomEG;