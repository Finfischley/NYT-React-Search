// include React
var React = require("react");

var Link = require("react-router").Link;

// helper component for making API calls
// var helpers = require("./utils/helpers");

// creating the main component
var Main = React.createClass({

	render: function() {
		console.log("rendering");
		return (
			<div className="page-container">
				<div className="page-header">
					<h1 className="text-center">New York Times Search</h1>
					<h2 className="text-center">Search and Save Articles of Interest</h2>
					<Link to="/search"></Link>
					<Link to="/saved"></Link>
				</div>
				<div className="container">
				{this.props.children}
				</div>
			</div>
		);
  	}
});

module.exports = Main;

			