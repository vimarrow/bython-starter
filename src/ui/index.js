import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		display: 'flex',
		width: '100vw',
		flexDirection: 'column'
	}
}
function app(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<h1>Hello World!</h1>
		</div>
	);
}
const App = withStyles(styles)(app);
ReactDOM.render(<App />, document.getElementById("app"));