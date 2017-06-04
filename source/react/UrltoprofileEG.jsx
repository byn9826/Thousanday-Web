import React, {Component} from 'react';
import {Urltoprofile} from 'thousanday-react';
class UrltoprofileEG extends Component {
    render() {
        return (
            <section id="urltoprofile" className="example">
                <header className="example-header">
                    <h2>Urltoprofile</h2>
                    <h3>Turn image url into canvas for upload</h3>
                </header>
                <span className="example-span">
                    {"<Urltoprofile url='http://....' />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Display user image from social website<br/>
                    2. Turn image from url into data could be send and save to backend<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <h4>Directly get image from facebook api</h4>
                <img src={"http://graph.facebook.com/1950471678518843/picture?type=square"} />
                <h4>Process image to ready for upload</h4>
                <Urltoprofile url={"http://graph.facebook.com/1950471678518843/picture?type=square&w‌​idth=720&height=720"} />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#urltoprofile" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default UrltoprofileEG;