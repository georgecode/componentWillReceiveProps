var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
  );

setTimeout(function () {
	ReactDOM.render(
	 <App newShit="HELLO it works" />,
  	document.getElementById('app')
	);
}, 5000);


//*******************

//BELOW IS AN EXAMPLE OF componentWillReceiveProps 


// class Example extends React.Component{
// 	componentWillReceiveProps(nextProps){
// 		alert("THIS WILL ONLY LOAD AFTER A COMPONENT HAS RENDERED ONCE ALREADY"
// 			+"Check out the new props.text that "
//     	+ "I'm about to get:  " + nextProps.text);

// 	}


// 	render(){
// 		alert("this alerts no matter what");
// 		return <h1>{this.props.text}</h1>;
// 	}

// }//End es6 Example class


// // The first render won't trigger
// // componentWillReceiveProps:
// ReactDOM.render(
// 	<Example text="Hello world" />,
// 	document.getElementById('app')
// );

// // After the first render, 
// // subsequent renders will trigger
// // componentWillReceiveProps:
// setTimeout(function () {
// 	ReactDOM.render(
// 		<Example text="reloaded Hello world" />,
// 		document.getElementById('app')
// 	);
// }, 5000);




