import React, { Component } from 'react';

class Counter extends Component {

	incrementScore = () => {
		this.setState( prevState => {
			if( isNaN(prevState.score) ){
				return ({
					score: 1
				});
			} else {
				return ({
					score: prevState.score + 1
				});
			}
		});
	}
	
	decrementScore = () => {
		this.setState( prevState => {
			if ( prevState.score === 0 || isNaN(prevState.score) ){
				return ({
					score: "you lose"
				});
			} else {
				return ({
					score: prevState.score - 1
				});
			}
		});
	}
  
	render() {
	  return (
		<div className="counter">
		  <button className="counter-action decrement"> - </button>
		  <span className="counter-score">{ this.props.score }</span>
		  <button className="counter-action increment"> + </button>
		</div>
	  );
	}
  }

export default Counter;