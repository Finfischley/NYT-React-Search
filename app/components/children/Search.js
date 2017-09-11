// Include React
var React = require("react");
var Router = require("react-router");

var Query = require('/search-comps/Query');
var Results = require('/search-comps/Results');

var helpers = require("../utils/helpers");

// This is the Search component
var Search = React.createClass({
	// set generic state for topic, start date and end date
	getInitialState: function() {
		return { topic: "", startDate: "", endDate: "", results: {} }
	},
	// // if the component updates(i.e. if a search term is entered)
	componentDidUpdate: function() {
		// run the article search
		helpers.runQuery(this.state.topic, this.state.startDate, this.state.endDate).then(function(data) {
			if (data !== this.state.results) {
				console.log("Article", data);
				this.setState({ results: data });
		// post new results
				helpers.getArticle(this.state.results).then(function() {
					console.log("Updated");
				}.bind(this));
			}
		}.bind(this));
	},

	setSearch: function(newTopic, newStartDate, newEndDate){
		this.setState({
			topic: newTopic,
			startDate: newStartDate,
			endDate: newEndDate
		})
	},	

	// Here we describe this component's render method
	render: function() {
	    return (
	      	<div className="panel panel-default">
				<div className="panel-heading">
      				<h1 className="panel-title text-center">Search</h1>
    			</div>
    			<div className="panel-body text-center">
    				<div> this is search comp </div>
    				<Query setSearch={this.setSearch} />

    				<Results results={this.state.results} />
          			
              	</div>
              </div>
    )}
});

module.exports = Search;


			
				
