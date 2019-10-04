import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

class Account extends React.Component {
	render() {
		return (
			<Typography variant="h1" gutterBottom>Account Page</Typography>
		);
	}
}

const mapStateToProps = state => {
	return {
		profile: state.auth.profile
	};
};

export default connect(mapStateToProps)(Account);
