// include axios
var axios = require("axios");

var APIkey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q="

var helpers = {

	runQuery: function(topic, startDate, endDate) {

		var topic = topic.trim();
		var startDate = startDate.trim();
		var endDate = endDate.trim();

		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey + this.topic + "?begin_date=xyz" + this.startDate + "?end_date=xyz" + this.endDate)
		.then(function(results) {
		return results.data.response;
		});

	},

	getArticle: function() {
		return axios.get("/api")
		.then(function(results) {
			return results;
		})
	},

	postArticle: function(title, date, url) {
    	var newArticle = {title: title, date: date, url: url }
    	return axios.post("/api", newArticle)
    		.then(function(results){
    			return results._id;
    		})
  	},	

  	deleteArticle: function(title, date, url) {
  		return axios.delete("/api")
  			.then(function(results) {
  				return results;
  			})
  	}
}
module.exports = helpers;