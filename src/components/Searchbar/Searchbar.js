import React from 'react';
import { connect } from 'react-redux';
import { fetchCountries, selectRegion } from '../../actions/';
import SearchbarForm from './SearchbarForm';

class Searchbar extends React.Component {

	onSubmit = (formValue) => {
		if ('search' in formValue) {
			this.props.fetchCountries(formValue.search);
		}
		if ('region' in formValue) {
			this.props.selectRegion(formValue.region);
		} else {
			this.props.selectRegion("");
		}
	}
	render() {
		return(
			<div>
				<div className={`ui basic fluid raised segment ${this.props.display}`}>
					<SearchbarForm
						onSubmit={this.onSubmit}
						selectRegion={this.selectRegion}
						display={this.props.display}
					/>
				</div>
			</div>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		display: state.interface.display
	}
};

export default connect(mapStateToProps, { fetchCountries, selectRegion })(Searchbar);
