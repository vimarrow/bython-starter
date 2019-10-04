import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import GoogleLoginButton from '../../common/GoogleLoginButton';

class Home extends React.Component {
	render() {
		return (
			<>
				<Typography variant="h1" gutterBottom>Hello World</Typography>
				<GoogleLoginButton />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		profile: state.auth.profile
	};
};

export default connect(mapStateToProps)(Home);