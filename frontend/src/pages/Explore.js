import React, {Component} from "react"
import { connect } from 'react-redux';
import { 
	selectExploreType, selectExploreNature, readExploreMoments
} from '../redux/actions/explore';
import Typepicker from '../components/Typepicker';
import Waterfall from '../components/Waterfall';
import '../styles/explore.css';

class Explore extends Component {
	pickType(newType) {
		this.props.selectExploreType(
			this.props.explore.type,
			this.props.explore.nature,
			newType
		);
	}
	pickNature(newNature) {
		this.props.selectExploreNature(
			this.props.explore.nature,
			this.props.explore.type,
			newNature
		);
	}
	loadMore() {
		this.props.readExploreMoments(
			this.props.explore.type,
			this.props.explore.nature,	
			this.props.explore.load
		);
	}
  render() {
		let loadButton;
		if (this.props.explore.momentsData.length !== 0 && !this.props.explore.locker) {
			loadButton = (
				<h6 id="load-button" onClick={ this.loadMore.bind(this) }>
					Load more ...
				</h6>
			);
		}
    return (
			<main id="main">
				<section className="main-filter">
					<div className="main-filter-title">
						<img alt="type" src="/public/icon/glyphicons-type.png" />
						<h4>Filter Type</h4>
					</div>
					<Typepicker
						data={ ["Dog", "Cat", "Bird", "Fish", "Other"] } 
						color="#052456" 
						width="35px" 
						chooseType={ this.pickType.bind(this) } 
					/>
				</section>
				<section className="main-filter">
					<div className="main-filter-title">
						<img alt="type" src="/public/icon/glyphicons-nature.png" />
						<h4>Filter Nature</h4>
					</div>
					<Typepicker
						data={ ["Cute", "Strong", "Smart", "Beauty"] } 
						color="#052456" 
						width="40px" 
						chooseType={ this.pickNature.bind(this) } 
					/>
				</section>
				<div id="main-title">
					<img alt="Moment" src="/public/icon/glyphicons-moment.png" />
					<h3>Explore cutes around the world</h3>
				</div>
				<Waterfall 
					column={ window.innerWidth > 910 ? '4' : '3' }
					image={ this.props.explore.momentsData } 
					fontFamily="'Rubik', sans-serif" 
				/>
				{ loadButton }
			</main>
		);
  }
}

export default connect(
  (state) => ({ explore: state.explore }),
  { selectExploreType, selectExploreNature, readExploreMoments }
)(Explore);
