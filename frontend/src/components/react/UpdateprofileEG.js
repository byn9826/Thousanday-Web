import React, {Component} from 'react';
import {Updateprofile} from 'thousanday-react';
class UpdateprofileEG extends Component {
    saveProfile(newUrl) {
        
    }
    render() {
        return (
            <section id = "updateprofile" className = "example">
                <header className = "example-header">
                    <h2>Updateprofile</h2>
                    <h3>Update profile image.</h3>
                </header>
                <span className="example-span">
                    {"<Updateprofile src='profile.png' width='200' />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Show new profile image<br/>
                    2. Return new profile image information which could send and save to backend<br/>
                </h4>
                <h4>
                    <b>Notice:</b><br/>
                    The image crop function is depending on <a href="https://github.com/mosch/react-avatar-editor" target="__blank">react-avatar-editor</a><br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Updateprofile src="/public/reactUI/7.jpg" width="200" saveProfile={this.saveProfile.bind(this)}  fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#updateprofile" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default UpdateprofileEG;