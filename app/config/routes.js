// include React Library
var React = require("react");

// include the react-router module
var router = require("react-router");

// include the route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/children/Main");
var Search = require("../components/children/Search");
var Saved = require("../components/children/Saved");

// Export the Routes
module.exports = (

	<Router history={hashHistory}>
    <Route path="/" component={Main}>

		{/* If user selects Info or Chat show the appropriate component */}
       <Route path="/search" component={Search} />
       <Route path="/saved" component={Saved} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>    	
);