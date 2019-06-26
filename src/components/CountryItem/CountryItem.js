import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCountry, fetchCountriesByCode } from '../../actions/';

class CountryItem extends React.Component {
	numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	onClick = () => {
		this.props.fetchCountriesByCode(this.props.country.borders);
		this.props.selectCountry(this.props.country);
	}

	render() {
		return(
			<div className='column'>
				<div className={`ui segment grey card ${this.props.display}`}>
					<div className="image">
						<Link to={`/show/${this.props.country.numericCode}`} onClick={this.onClick}>
							<img
									className="ui large image"
									src={this.props.country.flag}
									alt={this.props.country.name}
							/>
						</Link>
					</div>
					<div className={`content`}>
						<h3>{this.props.country.name}</h3>
						<p><b>Population:</b> {this.numberWithCommas(this.props.country.population)}</p>
						<p><b>Region:</b> {this.props.country.region}</p>
						<p><b>Capital:</b> {this.props.country.capital}</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		display: state.interface.display
	}
}

export default connect(mapStateToProps, { selectCountry, fetchCountriesByCode })(CountryItem);
