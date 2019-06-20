import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCountry, fetchCountriesByCode } from '../../actions/';

class CountryLink extends React.Component {
	onClick = () => {
		this.props.fetchCountriesByCode(this.props.country.borders);
		this.props.selectCountry(this.props.country);
	}
	render() {
		return(
			<div>
				<Link
					to={`/show/${this.props.country.numericCode}`}
					className={`ui button ${this.props.display}`}
					key={this.props.country.numericCode}
					onClick={this.onClick}
				>
					{this.props.country.name}
				</Link>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		display: state.interface.display
	}
}

export default connect(mapStateToProps, {selectCountry, fetchCountriesByCode})(CountryLink);
