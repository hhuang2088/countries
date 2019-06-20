import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import CountryList from './CountryList/CountryList';
import CountryShow from './CountryShow/CountryShow';

class App extends React.Component {

	render() {
		return(
			<div>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path="/" exact component={CountryList} />
						<Route path="/show/:id" exact component={CountryShow} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	};
};

export default App;
