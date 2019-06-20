import React from 'react';
import { connect } from 'react-redux';
import Searchbar from '../Searchbar/Searchbar';
import CountryItem from './CountryItem';

class CountryList extends React.Component {
	renderCountryItems = () => {
		return(
			this.props.countries.map((country) => {
				if (this.props.region.length > 0) {
					if(country.region === this.props.region) {
						return <CountryItem country={country} key={country.numericCode} />;
					} else {
						return undefined;
					}
				} else {
				return <CountryItem country={country} key={country.numericCode} />
			};
		})
	)}

	render() {
		return(
			<div className={`ui basic segment ${this.props.display}`}>
				<Searchbar />
				<div className={'ui four column grid container'}>
					{this.renderCountryItems()}
				</div>
			</div>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		countries: state.countries.countryList,
		region: state.countries.selectedRegion,
		display: state.interface.display
	};
};

export default connect(mapStateToProps)(CountryList);
