import React, {Component} from "react"
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { 
	readWatchPage, updateWatchPet, readWatchMoments, changePetsLoad
} from '../redux/actions/watch';
import { domainUrl } from '../helpers/config';
import Waterfall from '../components/Waterfall';
import '../styles/watch.css';

class Watch extends Component {
	componentDidMount() {
		this.props.readWatchPage(this.props.account.id);
	}
	loadPets() {
		this.props.changePetsLoad();
	}
	changeWatch(petId, action) {
		this.props.updateWatchPet(
			this.props.account.id,
			this.props.account.token,
			petId,
			action
		);
	}
	changeList(value) {
		if (value !== this.props.watch.loadList) {
			const lists = value === "watch" ? 
				this.props.watch.watchList : null;
			this.props.readWatchMoments(
				lists, 0, value, this.props.account.id
			);
		}
	}
	loadMore() {
		const lists = this.props.watch.loadList === "watch" ? 
			this.props.watch.watchList : null;
		this.props.readWatchMoments(
			lists, this.props.watch.load, this.props.watch.loadList, this.props.account.id
		);
	}
	render() {
		if (this.props.account.id === null) {
			return <Redirect to={ '/403' } />;
		}
		let watchPets = [], totalPets, loadPets;
		if (this.props.watch.loadPets * 5 >= this.props.watch.petsList.length) {
			totalPets = this.props.watch.petsList.length;
		} else {
			totalPets = this.props.watch.loadPets * 5;
			loadPets = (<h6 id="aside-load" onClick={ this.loadPets.bind(this) }>Load More ...</h6>);
		}
		let loadGallery;
		if (!this.props.watch.locker) {
			loadGallery = (
				<h6 id="load-button" onClick={ this.loadMore.bind(this) }>
					Load more ...
				</h6>
			);
		}
    for (let i = 0; i < totalPets; i++) {
			watchPets[i] = (
				<div 
					key={ "petwatch" + i } 
					className={ 
						this.props.watch.unwatch.indexOf(this.props.watch.petsList[i].pet_id) === -1 ?
							"aside-list" : "aside-remove"
					}
				>
					<a href={ "/pet/" + this.props.watch.petsList[i].pet_id }>
						<img 
							alt={ this.props.watch.petsList[i].pet_name } 
							src={ domainUrl + "/img/pet/" + this.props.watch.petsList[i].pet_id + "/0.png" } 
						/>
						<h5>{ this.props.watch.petsList[i].pet_name }</h5>
					</a>
					{
						this.props.watch.unwatch.indexOf(this.props.watch.petsList[i].pet_id) === -1 ? (
							<h6 onClick={ this.changeWatch.bind(this, this.props.watch.petsList[i].pet_id, 0) }>
								Unwatch
							</h6>
						) : (
							<h6 onClick={ this.changeWatch.bind(this, this.props.watch.petsList[i].pet_id, 1) }>
								Watch
							</h6>
						)
					}
				</div>
			);
		}	
		return ([
			<aside id="aside" key="aside">
				<h4 id="aside-header">Watch List</h4>
				{ watchPets }
				{ loadPets }
			</aside>,
			<main id="main" key="main">
				<header id="main-header">
					<div 
						onClick={ this.changeList.bind(this, "watch") } 
						className="main-header-section" 
						style={{
							backgroundColor: this.props.watch.loadList === "watch" ? "#ef8513" : "#e5e5e5"
						}}
					>
						<img alt="Watch" src="/public/icon/glyphicons-watch.png" />
						<h6>On Watch List</h6>
					</div>
					<div 
						onClick={ this.changeList.bind(this, "love") } 
						className="main-header-section" 
						style={{
							backgroundColor: this.props.watch.loadList === "love" ? "#ef8513" : "#e5e5e5"
						}}
					>
						<img alt="Love" src="/public/icon/glyphicons-watch.png" />
						<h6>Moments Liked</h6>
					</div>
					<div 
						onClick={ this.changeList.bind(this, "comment") } 
						className="main-header-section" 
						style={{
							backgroundColor: this.props.watch.loadList === "comment" ? "#ef8513" : "#e5e5e5"
						}}
					>
						<img alt="Comment" src="/public/icon/glyphicons-comment.png" />
						<h6>Comments List</h6>
					</div>
				</header>
				<Waterfall 
					column={ window.innerWidth > 900 ? '3' : '2' } 
					image={ this.props.watch.galleryData } 
					fontFamily="'Rubik', sans-serif" 
				/>
				{ loadGallery }
			</main>
		]);
	}
}

export default connect(
  (state) => ({ watch: state.watch, account: state.account }),
  { readWatchPage, updateWatchPet, readWatchMoments, changePetsLoad }
)(Watch);