import React, { Component } from "react"
import '../styles/error.css';

export default class PageNotFound extends Component {
  render() {
    return (
      <main id="main">
				<section id="main-section">
					<h2>Page not Found!</h2>
					<h4>
						We can't find anything you want! <br />
						<a href="/">Please explore public moments</a>
					</h4>
				</section>
				<img alt="Page Not Found" src="/public/img/404.jpg" />
			</main>
    );
  }
}