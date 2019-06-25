import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchbarForm extends React.Component {

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}

	render() {
		return(
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className={`ui two column grid container ${this.props.display}`}
			>
				<div className={`six wide left floated column ${this.props.display}`}>
					<div className={`ui left icon fluid input ${this.props.display}`}>
						<Field
							name="search"
							component="input"
							type="text"
							placeholder="Search for a country..."
						/>
						<i className="search icon" />
					</div>
				</div>
				<div className="ui three wide right floated column">
					<Field className="ui selection dropdown"
						name="region"
						component="select"
						placeholder="Filter By Region"
					>
						<option />
						<option value="Africa" onClick={this.onClick}>Africa</option>
						<option value="Americas" onClick={this.Click}>Americas</option>
						<option value="Asia" onClick={this.onClick}>Asia</option>
						<option value="Europe" onClick={this.onClick}>Europe</option>
						<option value="Oceania" onClick={this.onClick}>Oceania</option>
					</Field>
				</div>
			</form>
		)
	}
}

export default reduxForm({
	form: 'searchbar'
})(SearchbarForm);
