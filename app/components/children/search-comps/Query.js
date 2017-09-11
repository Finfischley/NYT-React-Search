var React = require("react");

var Query = React.createClass({

	getInitialState: function(){
		return { topic: "", start: "", end: "" };
	},

	handleChange: function(event) {
		this.setState({topic: event.target.value}, {startDate: event.target.value}, {endDate: event.target.value});
	},

	handleSubmit: function(event) {
		event.preventDefault();
	
		// Set the parent to have the search term
	    this.props.setSearch(this.state.topic, this.state.startDate, this.state.endDate);
	    this.setState({ topic: "", startDate: "", endDate: "" });
  	},

  	render: function() {

  		<div className="container">
  			<form onSubmit={this.handleSubmit}>
    			<div className="form-group">
      				<h2 className="topic">
        			<strong>Search Topic</strong>
      				</h2>
      				<input
      					value={this.state.topic}
      					type="text"
      					className="form-control"
      					id="topic"
      					onChange={this.handleChange}
      					required
      				/>
      				<br />
      				<h2 className="startDate">
      				<strong>Start Date</strong>
      				</h2>
      				<input
      					value={this.state.startDate}
      					type="Date"
      					className="form-control"
      					id="startDate"
      					onChange={this.handleChange}
      					required
      				/>
      				<br />
					<h2 className="endDate">
      				<strong>End Date</strong>
      				</h2>
      				<input
      					value={this.state.endDate}
      					type="Date"
      					className="form-control"
      					id="endDate"
      					onChange={this.handleChange}
      					required
      				/>
      				<br />
      				<button className="btn btn-primary" type="submit">Search</button>
      			</div>
      		</form>
      	</div>
};

module.export = Query;
