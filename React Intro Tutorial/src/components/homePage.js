"use strict";

var React = require('react');

//React.createClass allows us to define a class which contains our component 
//And the one function we need to define our React component is render.
//render Required on any react component
//render function is where you put JSX. Whatever function returns is what is
//   displayed to the screen

//in the html, to specify a class, had to use className instead of class because class
// is reserverd word in js
//Then export component so it can be used elswhere. 

var Home = React.createClass({  
	render: function() {
		return (<div className="jumbotron"> 
			<h1>Pluralsign Administration</h1>
			<p>I like to fart</p>
		</div>
		);
	}
});

module.exports = Home; //Used the same name as the name of the component. 