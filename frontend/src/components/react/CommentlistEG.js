import React, {Component} from 'react';
import {Commentlist} from 'thousanday-react';
class CommentlistEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            comments: [
                ["This is first comment", "/public/reactUI/6.png", "/user/1", "2017-01-01"],
                ["This is second comment", "/public/reactUI/6.png", "/user/1", "2017-01-01"],
                ["This is third comment", "/public/reactUI/6.png", "/user/1", "2017-01-01"]
            ],
            locker: "off"
		};
	}
    loadComment() {
        let newComment = [["This is fourth comment", "/img/example/6.png", "/user/1", "2017-01-01"]];
        let comments = this.state.comments.concat(newComment);
        this.setState({comments: comments, locker: "on"});
    }
    render() {
        return (
            <section id="commentlist" className="example">
                <header className="example-header">
                    <h2>Commentlist</h2>
                    <h3>Show and load a list of comments</h3>
                </header>
                <span className="example-span">
                    {"<Commentlist data={comments} locker='off'"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Show a list of comments based on init data<br/>
                    2. Catch load more events<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Commentlist data={this.state.comments} locker={this.state.locker} loadMore={this.loadComment.bind(this)} fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#commentlist" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default CommentlistEG;