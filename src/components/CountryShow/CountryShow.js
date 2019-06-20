import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountriesByCode, selectCountry } from '../../actions/';
import CountryLink from './CountryLink';

class CountryShow extends React.Component {
	renderBorderLinks = () => {
		return(
			this.props.borderCountries.map((country) => {
				return (
					<CountryLink country={country} key={country.numericCode} />
				);
			})
		);
	}

	numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	joinCurrencies = (currencies) => {
		const currenciesString = [];
		currencies.forEach((currency) => {
			currenciesString.push(currency.code);
		});
		return(currenciesString.join(', '));
	}

	joinLanguages = (languages) => {
		const languagesString = [];
		languages.forEach((language) => {
			languagesString.push(language.name);
		});
		return(languagesString.join(', '));
	}

	render() {
		return(
			<div className={`ui basic segment ${this.props.display}`}>
				<div className="ui two column grid container">
					<div className="row">
						<Link to="/" className="ui button">Back</Link>
					</div>
					<div className="row">
						<div className="column">
							<img className="ui huge image" src={this.props.country.flag} alt={this.props.country.name}/>
						</div>
						<div className="column">
							<h2>{this.props.country.name}</h2>
							<div className="ui two column grid">
								<div className="row">
									<div className="column">
										<p><b>Native Name:</b> {this.props.country.nativeName}</p>
										<p><b>Population:</b> {this.numberWithCommas(this.props.country.population)}</p>
										<p><b>Region:</b> {this.props.country.region}</p>
										<p><b>Sub Region:</b> {this.props.country.subregion}</p>
										<p><b>Capital:</b> {this.props.country.capital}</p>
									</div>
									<div className="column">
										<p><b>Top Level Domain:</b> {this.props.country.topLevelDomain.join(', ')}</p>
										<p><b>Currencies:</b> {this.joinCurrencies(this.props.country.currencies)}</p>
										<p><b>Languages:</b> {this.joinLanguages(this.props.country.languages)}</p>
									</div>
								</div>
								<div className="row">
									<div className="ui grid container">
										<p><b>Border Countries: </b></p>
										{this.renderBorderLinks()}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		country: state.countries.selectedCountry,
		borderCountries: state.countries.borderCountries,
		display: state.interface.display
	};
};

export default connect(mapStateToProps, { fetchCountriesByCode, selectCountry })(CountryShow);
