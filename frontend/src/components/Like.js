import React, { Component } from 'react';

export default class Like extends Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: this.props.liked || "false",
			hover: "false",
			interact: this.props.interact || "true"
		};
	}
	clickLike() {
		let total = parseInt(this.state.agree);
		if (this.state.liked === "true") {
			this.props.newTotal(-1);
			this.setState({ liked: "false" });
		} else {
			this.props.newTotal(1);
			this.setState({ liked: "true" });
		} 
	}
	enterHeart() {
		this.setState({ hover: "true" });
	}
	leaveHeart() {
		this.setState({ hover: "flase" });
	}
	render() {
		let containerStyle = {
			display: "inline-block",
			verticalAlign: "middle"
		};
		let lightHeart = {
			backgroundColor: "#f2aa98",
			borderRadius: "3px",
			padding: "1px 4px",
			color: "white",
			cursor: "pointer",
			fontSize: "14px",
			fontFamily: "Times New Roman",
			display: "inline-block",
			verticalAlign: "midde"
		};
		let passiveHeart = {
			backgroundColor: "#f2aa98",
			borderRadius: "3px",
			padding: "1px 4px",
			color: "white",
			fontSize: "14px",
			fontFamily: "Times New Roman",
			display: "inline-block",
			verticalAlign: "midde"
		};
		let darkHeart = {
			backgroundColor: "#e51010",
			borderRadius: "3px",
			padding: "1px 4px",
			color: "white",
			cursor: "pointer",
			fontSize: "14px",
			fontFamily: "Times New Roman",
			display: "inline-block",
			verticalAlign: "midde"
		};
		let numStyle = {
			fontFamily: "Times New Roman",
			fontSize: "16px",
			marginLeft: "5px",
			display: "inline-block",
			verticalAlign: "middle"
		};
		let heart;
		if (this.state.interact === "true") {
			if (
				this.state.liked === "true" || 
				(this.state.liked === "false" && this.state.hover === "true")
			) {
				heart = (
					<span 
						style={ darkHeart } 
						onClick={ this.clickLike.bind(this) } 
						onMouseLeave={ this.leaveHeart.bind(this) }
					>
						❤
					</span>
				);
			} else {
				heart = (
					<span 
						style={ lightHeart } 
						onClick={ this.clickLike.bind(this) } 
						onMouseEnter={ this.enterHeart.bind(this) }
					>
						❤
					</span>
				);
			}   
		} else {
			heart = (
				<span style={ passiveHeart }>❤</span>
			);
		}
		return (
			<span style={ containerStyle }>
				{ heart }
				<span style={ numStyle }>{ this.props.agree} </span>
			</span>
		);
	}
}