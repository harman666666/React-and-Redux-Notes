$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage'); //Added this line
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

//var App = console.log('Hello world from Browserify');
//module.exports = App;

//React.render takes 2 parameters
//FIrst is the component we woudl like to render 
//Which in this case is Home and we can pass it JSX
//as that first parameter
//Second parameter is DOM element that I'd like to attach my application to

(function(win) {
    "use strict";

//Make new react component right here called App
//COde looks at route, then loads either component
var App = React.createClass({
	render: function(){
		var Child; //variable that keeps track of what child we want to render
		switch(this.props.route) { //depends on what url looks like, looks at route for app.
			case 'about': Child = About; break;
			case 'authors': Child = Authors; break;
			default: Child = Home;
		}

		//Return the markup
		return (
			<div>
                <Header />
				<Child />
			</div>
		);

	}
});

//Lets add an event listener, hashchange, which is the event that occurs when there is hash 
//change in the URL. then we call callback.

function render() {
	var route = win.location.hash.substr(1); //Get the route by taking a piece of the url.
	React.render(<App route={route} />, document.getElementById('app'));
	//Pass App, route as a property 
}


win.addEventListener('hashchange', render); //We watch for hashchange, then it calls render. 
render(); //Calling it here to render the screen initially. 



//React.render( <Home />, document.getElementById('app'));


}(window));