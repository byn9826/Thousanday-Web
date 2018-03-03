import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/public.css';
import Waterfall from "../components/Waterfall";
import { loadHomeData } from "../redux/actions/home";

class Home extends Component {
  componentDidMount() {
    console.log(this.props.loadHomeData(0));
  }
  render() {
    return ([
      <main id="main" key="main">
        <h1>Meet with pets</h1>
        <h2>around the world everyday!</h2>
        <h6 id="main-app">Get the mobile app</h6>
        <a href="https://play.google.com/store/apps/details?id=com.thousanday" target="_blank">
          <img className="main-mobile" alt="Google Play" src="./public/img/google-play.png" />
        </a>
      </main>,
      <aside id="aside" key="aside">
        <Waterfall 
          column={ window.innerWidth > 900 ? '3' : '2' } 
          image={ [] } 
          fontFamily="'Rubik', sans-serif" 
        />
      </aside>
    ]);
  }
}

export default connect(
  (state) => ({ 
    homeData: state.homeData,
    load: state.load
  }),
  { 
    loadHomeData 
  }
)(Home);