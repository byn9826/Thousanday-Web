import React, {Component} from 'react';
import {Like} from 'thousanday-react';
class LikeEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            like: 20
		};
	}
    updateLike(change) {
        let like = this.state.like;
        this.setState({like: like + change});
    }
    render() {
        return (
            <section id = "like" className = "example">
                <header className = "example-header">
                    <h2>Like</h2>
                    <h3>Show/Collect like from users</h3>
                </header>
                <span className="example-span">
                    {"<Like agree='100' /> "}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Show total like numbers<br/>
                    2. Change total like numbers based on users action<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Like agree={this.state.like} newTotal={this.updateLike.bind(this)}/>
                <h4>
                    <a href = "https://github.com/byn9826/Thousanday-React#like" target = "__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default LikeEG;
