import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
	  players: [
		  {
			playerName: "Mike",
			score: 20,
			id: 1
		   },
		   {
			playerName: "Shelbey",
			score: 20,
			id: 2
		   },
		   {
			playerName: "Same",
			score: 20,
			id: 3
		   },
		   {
			playerName: "Joey",
			score: 20,
			id: 4
		   }
	  ]
  };

  handleScoreChange = (index, delta) => {
	this.setState( prevState => {
		
		const playerScore = prevState.players[index].score += delta;

		if ( prevState.players[index].score === 0 ) {
			return ({
				score: prevState.players[index].score = "You Lose"
			});
		} else if ( isNaN(prevState.players[index].score) && delta === -1) {
			return ({
				score: prevState.players[index].score = "You Lose"
			});
		} else if ( isNaN(prevState.players[index].score) && delta === +1 ) {
			return ({
				score: prevState.players[index].score = 1
			});
		} else  {
			return ({
				score: playerScore
			});
		} 
		
	});
}

  handleRemovePlater = (id) => {
	  this.setState( prevState => {
		  return({
			  players: prevState.players.filter( p => p.id !== id )
		  })
	  });
  }

  render() {
	return (
		<div className="scoreboard">
			<Header 
				title="Scoreboard" 
				totalPlayers={this.state.players.length}     
			/>
			{/* Players List */}

			{ this.state.players.map( (player, index) => {
				return (
					<Player
						
						playerName={player.playerName} 
						score={player.score}
						id={player.id}
						key={player.id.toString()}
						index={index}
						changeScore={this.handleScoreChange}
						removePlayer={this.handleRemovePlater}
					/>
				)
			})}
		</div>
	);
  }
}

export default App;
