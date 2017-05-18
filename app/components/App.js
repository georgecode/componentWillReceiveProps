var React = require('react');


class Example extends React.Component{
	constructor(props,context){
		super(props, context);

		this.state = {
			title:'THIS is inital state'
		};

		this.clickShit=this.clickShit.bind(this);
	}//END ES6 way	

	shouldComponentUpdate(nextProps, nextState){
	    if ((this.props.text == nextProps.text) && 
      (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    	} else {
      alert("Okay fine I will update.")
      return true;
    	}		

	}

	clickShit(){
  		console.log(this.state.title +"XXXXXXXXX")
  		this.state.title = "this is an update to state";
  		console.log(this.state.title)
	}

	render(){
		return(
	      <div>
        	<h1 onClick={this.clickShit}>{this.props.text}</h1>
        	<h2>{this.state.subtext}</h2>
      	  </div>		
			)
	}

}//class Example end


module.exports = class extends React.Component{
	render(){
		return(
			<div>
				<Example text="this does nothing" />
			</div>
			)
	}


	// setTimeout(()=> {
	// 	console.log("please  work")
	// 	// render(){
	// 	// 	return(
	// 	// 		<div>
	// 	// 			<Example text="XXXXXXXXX" />
	// 	// 		</div>				
	// 	// 	)
	// 	// }
	// 	// render(
	//  // 	<Example text="holy funnk it finally works" />,
	// 	// );


	// }, 5000);
}








