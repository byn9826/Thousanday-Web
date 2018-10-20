import React, { Component } from "react"
import '../styles/error.css';

export default class InternalServerError extends Component {
  render() {
    return (
      <main id="main">
				<section id="main-section">
					<h2>Internal Server Error</h2>
					<h4>
						Something Wrong happens to our server! <br />
						Please try later
					</h4>
				</section>
				<img alt="Internal Server Error" src="/public/img/500.jpg" />
			</main>
    );
  }
}