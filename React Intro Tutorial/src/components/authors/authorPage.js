
"use strict"

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');


var AuthorPage = React.createClass({
	getInitialState: function(){
		return {
			authors: []
		};
	},

	//Logically the setting of component state should happen at component didmount
	//instead of component willmount so change that as well. 
	//ALso check if the component is mounted in this function. so write if statement 
	componentDidMount: function(){
		if(this.isMounted()){
			this.setState({authors: AuthorApi.getAllAuthors() });
		}
	}, 

	render: function() {

		return (
			<div> 
				<h1>Authors</h1>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
})

module.exports = AuthorPage;