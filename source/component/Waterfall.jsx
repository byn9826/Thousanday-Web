import React, {Component} from 'react';
class Waterfall extends Component {
    constructor(props) {
        super(props);
		this.state = {
            height: this.props.height || "160px",
            width: (parseInt(100 / this.props.column) -2) + "%",
            active: null,
            fontFamily: this.props.fontFamily || "Times New Roman"
		};
	}
    componentDidUpdate() {
        let waterfall = document.getElementById("thousanday-react-waterfall-content");
        if (waterfall) {
            waterfall.style.top = "-" + waterfall.offsetHeight + "px";
            waterfall.style.marginBottom = "-" + waterfall.offsetHeight + "px";
        }
    }
    showContent(i) {
        if (this.state.active !== i) {
            this.setState({active: i});
        }
    }
    render() {
        let rootStyle = {
            display: "inline-block",
            width: "100%",
            verticalAlign: "top",
            padding: "0",
            margin: "0"
        };
        let containerStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            width: this.state.width,
            margin: "5px 1%",
        };
        let imageStyle = {
            display: "block",
            width: "100%",
            height: this.state.height,
            backgroundSize: "cover",
            borderRadius: "5px"
        };
        let contentStyle = {
            position: "relative",
            width: "96%",
            margin: "0",
            padding: "4px 2%",
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: "5px",
            color: "white",
            fontFamily: this.state.fontFamily,
            fontSize: "14px",
            fontWeight: "normal"
        };
        let allImages = [];
        for (let i = 0; i < this.props.image.length; i++) {
            if (this.state.active === i) {
                allImages[i] = (
                    <a style={containerStyle} key={"thousandayreactwaterfall" + i} onMouseEnter={this.showContent.bind(this, i)} href={this.props.image[i][2]}>
                        <div style={Object.assign({}, imageStyle, {backgroundImage: "url(" + this.props.image[i][0] + ")"})}>
                        </div>
                        <div id="thousanday-react-waterfall-content" style={contentStyle}>
                            {this.props.image[i][1]}
                        </div>
                    </a>
                );
            } else {
                allImages[i] = (
                    <a style={containerStyle} key={"thousandayreactwaterfall" + i} onMouseEnter={this.showContent.bind(this, i)} href={this.props.image[i][2]}>
                        <div style={Object.assign({}, imageStyle, {backgroundImage: "url(" + this.props.image[i][0] + ")"})}>
                        </div>
                    </a>
                );
            }
        }
		return (
            <section style={rootStyle}>
                {allImages}
            </section>
		);
	}
}
export default Waterfall;