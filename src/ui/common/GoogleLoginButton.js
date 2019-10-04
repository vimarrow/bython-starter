import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loginUserWithGoogle, startGoogleLoginAuth, googleLoginFail, doLogout } from '../redux/actions';

const stylesWithTheme = theme => ({
	buttonProgress: {
		color: theme.palette.common.black,
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	}
});

class GoogleLoginButton extends React.Component {
	constructor(props) {
		super(props);
		this.onLoginClick = this.onLoginClick.bind(this);
	}
	onLoginClick() {
		const {dLoadingGAuth, dLoadedGProfile, dFailedGAuth, dLogout, profile} = this.props;
		const gAuth = gapi.auth2.init({client_id: '622353470018-0hfnn7gn8eo1mvd29c9gj0l6cvti0dsu.apps.googleusercontent.com'});
		if(profile === null) {
			dLoadingGAuth();
			const isLoggedInWithG = gAuth.isSignedIn.get();
			if(isLoggedInWithG) {
				debugger;
			} else {
				gAuth.signIn().then(res => {
					const profile = res.getBasicProfile();
					const token = res.id_token;
					const readableProfile = {
						imageSrc: profile['Paa'],
						gId: res.getId(),
						email: profile['U3'],
						fullName: profile['ig']
					};
					dLoadedGProfile(token, readableProfile);
				}).catch(err => {
					dFailedGAuth(err.error);
				});
			}
		} else {
			gAuth.signOut();
			dLogout();
		}
	}
	render() {
		const {profile, loadingFlags, classes} = this.props;
		const isLoading = loadingFlags.loading;
		return (
			<Button onClick={this.onLoginClick} disabled={isLoading} variant="contained" color="primary">
				{profile === null ? 'Login With Google' : 'Logout'}
				{isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
			</Button>
		);
	}
}

const mapStateToProps = state => {
	return {
		profile: state.auth.profile,
		loadingFlags: state.auth.loadingFlags
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dLoadingGAuth: (...args) => dispatch(startGoogleLoginAuth(...args)),
		dLoadedGProfile: (...args) => dispatch(loginUserWithGoogle(...args)),
		dFailedGAuth: (...args) => dispatch(googleLoginFail(...args)),
		dLogout: (...args) => dispatch(doLogout(...args))
	};
};

export default withStyles(stylesWithTheme)(connect(mapStateToProps, mapDispatchToProps)(GoogleLoginButton));
