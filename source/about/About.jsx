import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
class About extends Component {
    constructor(props) {
        super(props);
		this.state = {
			label: "begin"
		};
	}
    changeProject(label) {
        this.setState({label: label});
    }
    render() {
        let thouStyle = {
            display: "inline-block"
        }
        let aside;
        switch (this.state.label) {
            case "thousanday":
                aside = (
                    <aside id="aside">
                        <h4>Personal Full Stack Projects - Thousanday</h4>
                        <img className="aside-image" src="/img/about/thousanday.jpg" alt="thousanday" />
                        <div className="aside-project">
                            <div className="aside-project-left">
                                <h5>
                                    It's an image sharing social website for your pets
                                </h5>
                                <div className="aside-project-left-link">
                                    <a href="https://thousanday.com" target="_blank"><h6>Live Site</h6></a>
                                    <a href="https://github.com/byn9826/Thousand-Day" target="_blank"><h6>Source Code</h6></a>
                                </div>
                            </div>
                            <img src="/img/about/react.png" alt="React" />
                            <img src="/img/about/phalcon.png" alt="Phalcon" />
                            <img src="/img/about/mysql.png" alt="MySQL" />
                        </div>
                        <div className="aside-project">
                            <div className="aside-project-left">
                                <h5>
                                    It's also an image sharing mobile app for your pets
                                </h5>
                                <div className="aside-project-left-link">
                                    <a href="https://play.google.com/store/apps/details?id=com.thousanday" target="_blank"><h6>Google Play</h6></a>
                                    <a href="https://github.com/byn9826/Thousanday-Mobile" target="_blank"><h6>Source Code</h6></a>
                                </div>
                            </div>
                            <img src="/img/about/react-native.png" alt="React Native" />
                            <img src="/img/about/phalcon.png" alt="Phalcon" />
                            <img src="/img/about/mysql.png" alt="MySQL" />
                        </div>
                        <div className="aside-project">
                            <div className="aside-project-left">
                                <h5>
                                    It includes Frontend UI components development
                                </h5>
                                <div className="aside-project-left-link">
                                    <a href="https://thousanday.com/react" target="_blank"><h6>Live Demo</h6></a>
                                    <a href="https://github.com/byn9826/Thousanday-React" target="_blank"><h6>Source Code</h6></a>
                                </div>
                            </div>
                            <img src="/img/about/react.png" alt="React" />
                        </div>
                    </aside>
                )
                break;
            case "marvel":
                aside = (
                    <aside id="aside">
                        <h4>Course Php Web Project - Marvel Canada</h4>
                        <img className="aside-image" src="/img/about/marvel.jpg" alt="marvel" />
                        <div className="aside-project">
                            <div className="aside-project-left">
                                <h5>
                                    It's a website for finding and comparing canada national parks<br/>
                                    - Complete by a team of five.
                                </h5>
                                <div className="aside-project-left-link">
                                    <a href="https://canadaparks.herokuapp.com/" target="_blank"><h6>Live Site</h6></a>
                                    <a href="https://github.com/byn9826/canada-parks" target="_blank"><h6>Source Code</h6></a>
                                </div>
                            </div>
                            <img src="/img/about/react.png" alt="React" />
                            <img src="/img/about/php.png" alt="Php" />
                            <img src="/img/about/mysql.png" alt="MySQL" />
                        </div>
                    </aside>
                );
                break;
            case "notepress":
                aside = (
                    <aside id="aside">
                        <h4>WordPress Theme - NotePress</h4>
                        <img className="aside-image" src="/img/about/notepress.jpg" alt="Notepress" />
                        <div className="aside-project">
                            <div className="aside-project-left">
                                <h5>
                                    It's my Personal project which turn WordPress into your public online notebooks.
                                </h5>
                                <div className="aside-project-left-link">
                                    <a href="http://notepress.epizy.com/" target="_blank"><h6>Live Site</h6></a>
                                    <a href="https://github.com/byn9826/NotePress" target="_blank"><h6>Source Code</h6></a>
                                </div>
                            </div>
                            <img src="/img/about/jquery.png" alt="jQuery" />
                            <img src="/img/about/php.png" alt="Php" />
                        </div>
                    </aside>
                );
                break;
            case "tiny":
                aside = (
                    <aside id="aside">
                        <h4>Personal Tiny Web Apps - Data Analysis, Game ...</h4>
                        <img className="aside-image" src="/img/about/eve.jpg" alt="EVE" />
                        <div className="aside-project">
                            <div className="aside-project-left">
                                <h5>
                                    Analyze your odds of winning in the coming battle by APIs from EVE Online
                                </h5>
                                <div className="aside-project-left-link">
                                    <a href="https://byn9826.github.io/eve-combater/" target="_blank"><h6>Live Demo</h6></a>
                                    <a href="https://github.com/byn9826/eve-combater" target="_blank"><h6>Source Code</h6></a>
                                </div>
                            </div>
                            <img src="/img/about/react.png" alt="React" />
                        </div>
                        <img className="aside-image1" src="/img/about/thunder.jpg" alt="Thunder Bird" />
                        <div className="aside-project">
                            <div className="aside-project-left">
                                <h5>
                                    Flapper Bird like game by JQuery and CSS animation
                                </h5>
                                <div className="aside-project-left-link">
                                    <a href="https://byn9826.github.io/Thunder-Bird/" target="_blank"><h6>Live Demo</h6></a>
                                    <a href="https://github.com/byn9826/Thunder-Bird" target="_blank"><h6>Source Code</h6></a>
                                </div>
                            </div>
                            <img src="/img/about/jquery.png" alt="jQuery" />
                        </div>
                        <img className="aside-image1" src="/img/about/github.jpg" alt="Github" />
                        <div className="aside-project">
                            <div className="aside-project-left">
                                <h5>
                                    Analyze your working pattern by APIs from Github
                                </h5>
                                <div className="aside-project-left-link">
                                    <a href="https://byn9826.github.io/commitsHours/" target="_blank"><h6>Live Demo</h6></a>
                                    <a href="https://github.com/byn9826/commitsHours" target="_blank"><h6>Source Code</h6></a>
                                </div>
                            </div>
                            <img src="/img/about/react.png" alt="React" />
                        </div>
                    </aside>
                )
                break;
            case "cti":
                aside = (
                    <aside id="aside">
                        <h4>Academic UX Design Project for Canadian Tire Innovation</h4>
                        <img className="aside-image" src="/img/about/cti.jpg" alt="CTI" />
                        <div className="aside-project-full">
                            <h5>
                                It's an UX design project for Canadian Tire innovation to imporve their kiosk system<br/>
                                - Complete by a team of four.
                            </h5>
                            <div className="aside-project-left-link">
                                <a href="https://byn9826.github.io/CTI-kioskDEMO/" target="_blank"><h6>Live Demo</h6></a>
                                <a href="https://uwaterloo.ca/stratford-campus/blog/post/case-study-canadian-tire" target="_blank"><h6>Case Study</h6></a>
                            </div>
                        </div>
                    </aside>
                )
                break;
            
            case "ppt":
                aside = (
                    <aside id="aside">
                        <h4>Slide Show Design Showcase</h4>
                        <img className="aside-image" src="/img/about/hello.jpg" alt="Hello World" />
                        <div className="aside-project-full">
                            <h5>
                                Slide show designed for a course project at Master of Digital Experience Innovation project
                            </h5>
                            <div className="aside-project-left-link">
                                <a href="https://drive.google.com/file/d/0B2TZtAwSzB3CT1MtOW4yYXYwbDQ/view?usp=sharing" target="_blank"><h6>See More</h6></a>
                            </div>
                        </div>
                        <img className="aside-image1" src="/img/about/cms.jpg" alt="CMS" />
                        <div className="aside-project-full">
                            <h5>
                                Slide show designed for a course project at Web Development Graduate Certificate project
                            </h5>
                            <div className="aside-project-left-link">
                                <a href="https://drive.google.com/file/d/0B2TZtAwSzB3CWXp3RHo3SV9pbDg/view?usp=sharing" target="_blank"><h6>See More</h6></a>
                            </div>
                        </div>
                    </aside>
                )
                break;
            case "begin":
                aside = (
                    <aside id="aside">
                        <aside id="aside-begin">
                            <h3>
                                I'm a web developer who loves web development<br/>
                            </h3>
                            <div id="aside-skill">
                                <img src="/img/about/js.jpg" alt="JavaScript" />
                                <img src="/img/about/php.png" alt="Php" />
                                <img src="/img/about/python.png" alt="Python" />
                            </div>
                        </aside>
                    </aside>
                )
                break;


        }
        return (
            <div id="react-root">
                <Header restrict={true} />
                <main id="main">
                    <img id="main-avatar" src="/img/about/paulbao.png" alt="Avatar" />
                    <h1>Paul Bao</h1>
                    <h5>
                        Web Developer & Digital Designer
                    </h5>
                    <div id="main-social">
                        <a className="github-button main-social-icon" target="_blank" href="https://github.com/byn9826" data-size="large" aria-label="Follow @byn9826 on GitHub">Github</a>
                        <a className="main-social-icon" target="_blank" href="https://www.linkedin.com/in/baozier/">
                            <img className="main-avatar-icon" src="/img/about/linkedin.png" alt="linkedin" />
                        </a>
                        <a className="main-social-icon" target="_blank" href="https://medium.com/@byn9826">
                            <img className="main-avatar-icon" src="/img/about/medium.png" alt="Medium" />
                        </a>
                        <a className="main-social-icon" target="_blank" href="mailto:byn9826@gmail.com">
                            <img className="main-avatar-icon" src="/img/about/gmail.png" alt="Gmail" />
                        </a>
                    </div>
                    <h4>Explore my projects</h4>
                    <div onClick={this.changeProject.bind(this, "thousanday")} className={this.state.label === "thousanday"?"main-choice main-nav":"main-deactive main-nav"}>
                        <h6>Personal Full Stack Projects</h6>
                        <h5>Home page for you pets</h5>
                    </div>
                    <div onClick={this.changeProject.bind(this, "notepress")} className={this.state.label === "notepress"?"main-choice main-nav":"main-deactive main-nav"}>
                        <h6>WordPress Theme</h6>
                        <h5>Serve WordPress as notebook</h5>
                    </div>
                    <div onClick={this.changeProject.bind(this, "marvel")} className={this.state.label === "marvel"?"main-choice main-nav":"main-deactive main-nav"}>
                        <h6>Course Php Web Project</h6>
                        <h5>National park for your next trip</h5>
                    </div>
                    <div onClick={this.changeProject.bind(this, "tiny")} className={this.state.label === "tiny"?"main-choice main-nav":"main-deactive main-nav"}>
                        <h6>Personal Tiny Web Apps</h6>
                        <h5>Data Analysis, Game ..</h5>
                    </div>
                    <div onClick={this.changeProject.bind(this, "cti")} className={this.state.label === "cti"?"main-choice main-nav":"main-deactive main-nav"}>
                        <h6>Academic UX Design Project</h6>
                        <h5>Kiosk Design for Canadian Tire</h5>
                    </div>
                    <div onClick={this.changeProject.bind(this, "ppt")} className={this.state.label === "ppt"?"main-choice main-nav":"main-deactive main-nav"}>
                        <h6>Slide Show Design Showcase</h6>
                    </div>
                </main>
                {aside}
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<About />, document.getElementById("root"));