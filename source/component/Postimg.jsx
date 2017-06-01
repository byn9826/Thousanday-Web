import React, {Component} from "react";
class Inputarea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.width || "94%",
      		border: this.props.border || "2px solid #f7d7b4",
      		fontSize: this.props.fontSize || "14px",
     		content: this.props.content || "",
      		count: parseInt(this.props.max) - this.props.content.length,
      		length: parseInt(this.props.max),
			fontFamily: this.props.fontFamily || "Times New Roman",
			error: "",
			rawUrl: null,
			title: this.props.title || null,
			reset: this.props.reset
		};
	}
	componentDidUpdate() {
		if (this.state.reset != this.props.reset) {
			this.setState({content: "", rawUrl: null, reset: this.props.reset, error: "Success!", count: this.state.length});
		}
	}
	editInput(event) {
		let changedInput = event.target.value.substr(0, this.state.length);
		this.setState({content: changedInput});
		if (changedInput.replace(/^\s+/, "").replace(/\s+$/, "") !== "" && this.state.error !== "") {
			this.setState({error: ""});
		}
      	this.setState({count: this.state.length - changedInput.length});
	}
	loadImg(event) {
		event.preventDefault();
		let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({rawUrl: reader.result});
			if (this.state.error !== "") {
				this.setState({error: ""});
			}
        }
        reader.readAsDataURL(file);
	}
	submitPost() {
		let content = this.state.content.replace(/^\s+/, "").replace(/\s+$/, "");
		if (content === "") {
			this.setState({error: "Please say something"});
		} else if (!this.state.rawUrl) {
			this.setState({error: "Please upload an image"});
		} else {
			let url = this.state.rawUrl;
			let type = url.split(",")[0];
			type = type.split(":")[1];
			type = type.split(";")[0];
			if (type == "image/jpeg" || type == "image/png") {
				let src = url.split(",")[1];
				src = window.atob(src);
				let blobSrc = new Uint8Array(src.length);
				for (let i = 0; i < src.length; i++) {
					blobSrc[i] = src.charCodeAt(i);
				};
				let image = new Blob([blobSrc], {type: type});
				let message = this.state.content;
				this.props.submitImg(message, image);
			} else {
				this.setState({error: "File type not support"});
			}
		}
	}
	render() {
		let titleStyle = {
			display: "block",
			fontSize: "15px",
			fontWeight: "bold",
			fontFamily: this.state.fontFamily,
			color: "#ef8513",
			marginBottom: "10px"
		};
		let spanStyle = {
			width: this.state.width,
			display: "inline-block",
			verticalAlign: "top",
			backgroundColor: "#f7f9fc",
			borderRadius: "6px",
			padding: "20px 3%",
		};
		let inputStyle = {
			display: "block",
			width: "98%",
			paddingTop: "5px",
			paddingBottom: "5px",
			border: this.state.border,
			height: "50px",
			fontFamily: this.state.fontFamily,
			fontSize: this.state.fontSize,
			paddingLeft: "1%",
			outline: "none",
			borderRadius: "5px",
			resize: "none",
		};
		let lineStyle = {
			display: "block",
			width: "100%",
			marginTop: "5px",
			lineHeight: "20px",
			verticalAlign: "middle",
			overflow: "auto"
		};
		let cameraStyle = {
			float: "left",
			marginLeft: "10px",
			filter: "opacity(50%)",
			width: "20px",
			cursor: "pointer"
		};
		let postStyle = {
			float: "right",
			backgroundColor: "#934c4c",
			borderRadius: "3px",
			textAlign: "center",
			color: "white",
			fontSize: "11px",
			fontFamily: this.state.fontFamily,
			padding: "2px 5px",
			marginRight: "10px",
			cursor: "pointer"
		};
		let errorStyle = {
			float: "right",
			fontFamily: this.state.fontFamily,
			fontSize: "11px",
			marginRight: "15px",
			color: "red"
		};
		let countStyle = {
			float: "left",
			fontFamily: this.state.fontFamily,
			fontSize: "11px",
			marginLeft: "10px"
		};
		let fileStyle = {
			position: "relative",
			width: "20px",
			height: "12px",
			left: "-76px",
			cursor: "pointer",
			opacity: "0"
		};
		let imgStyle = {
			float: "left",
			marginTop: "10px",
			marginBottom: "5px",
			height: "150px",
			borderRadius: "6px",
			marginLeft: "5px"
		};
		let camera = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg5NjZGRDgyODUzMzExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg5NjZGRDgxODUzMzExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GbyTMwAAALhJREFUeNpi+P//PwMuDAQCQLwAiP8TwCA1AnjNImDRASIsgeEDZFkEBAYkWALDCnjMAwfPBDIMJRZPgNpBU0vgljFCGTQHTDQy1w+KUQCx3l+AHNkgNpFJH4aJUpSAJzUlUMuiBUiGNkDzFgg3IIkvoIZFCkiWoMs1IAUjZRYRKCUOIMnjNYfSVKdAteTNyMgIM+wAFukFaGrwgkGTGOiWvKmSYelW1jEDsSAQW9DYnol0q48AAgwADIvhHQLlhIIAAAAASUVORK5CYII=";
		let image;
		if (this.state.rawUrl) {
			image = (<img style={imgStyle} src={this.state.rawUrl} alt="upload-image" />);
		}
		return (
			<span style={spanStyle}>
				<span style={titleStyle}>{this.state.title}</span>
				<textarea style={inputStyle} value={this.state.content} onChange={this.editInput.bind(this)} />
				<div style={lineStyle}>
					<img style={cameraStyle} src={camera} alt="ADD" />
					<input style={fileStyle} type="file" accept="image/*" onChange={this.loadImg.bind(this)} />
					<span style={countStyle}>{this.state.count}/{this.state.length}</span>
					<div style={postStyle} onClick={this.submitPost.bind(this)}>Post</div>
					<span style={errorStyle}>{this.state.error}</span>
				</div>
				<div style={lineStyle}>
					{image}
				</div>
			</span>
		);
	}
}
export default Inputarea;
