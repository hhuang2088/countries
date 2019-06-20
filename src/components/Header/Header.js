import React from 'react';
import { toggleDarkMode } from '../../actions';
import { connect } from 'react-redux';
import './Header.css';

const Header = (props) => {
	const onClick = () => {
		props.toggleDarkMode(props.display);
	};
	return(
		<div className={`ui segment ${props.display}`}>
			<div className={"ui two column grid container"}>
				<div className="column">
					<h3 className={`ui left floated header ${props.display}`}>Where in the world?</h3>
				</div>
				<div className="column">
					<h5 className={`ui right floated header ${props.display}`} id="dark-mode-toggle" onClick={onClick}>
						<i className="moon outline icon" /> Dark Mode
					</h5>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		display: state.interface.display
	}
};

export default connect(mapStateToProps, { toggleDarkMode })(Header);
