import React, {Component} from 'react';
class Facebookprofile extends Component {
    constructor(props) {
        super(props);
		this.state = {
			width: this.props.width || 200,
            height: this.props.height || 200,
            data: null
		};
	}
    componentDidMount() {
        let canvas = document.getElementById("thousanday-changeto-profile-canvas");
        let context = canvas.getContext('2d');
        let profile = new Image();
        profile.setAttribute('crossOrigin', 'anonymous');
        profile.src = this.props.url;
        let itself = this;
        profile.onload = function () {
            let width;
            if (profile.width >= profile.height) {
                width = profile.height;
            } else {
                width = profile.width;
            }
            context.drawImage(profile, 0, 0, width, width, 0, 0, canvas.width, canvas.height);
        }
        let interval = setInterval(() => {
            if(document.readyState === 'complete') {
                clearInterval(interval);
                setImg();
            }    
        }, 500);
        function setImg() {
            let image = document.getElementById("thousanday-changeto-profile-canvas");
            let data = image.toDataURL();
            let url = data.split(',')[1];
            url = window.atob(url);
            let blobUrl = new Uint8Array(url.length);
            for (var i = 0; i < url.length; i++) {
                blobUrl[i] = url.charCodeAt(i);
            };
            let finalUrl = new Blob([blobUrl], {type: "image/jpg"});
            itself.setState({data: finalUrl});
        }
    }
    render() {
		return (
            <canvas id="thousanday-changeto-profile-canvas" width={this.state.width} height={this.state.height}></canvas>
		);
	}
}
export default Facebookprofile;