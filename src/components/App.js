import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
	  players: [
		  {
			playerName: "Mike",
			score: 0,
			id: 1
		   },
		   {
			playerName: "Shelbey",
			score: 0,
			id: 2
		   },
		   {
			playerName: "Same",
			score: 0,
			id: 3
		   },
		   {
			playerName: "Joey",
			score: 0,
			id: 4
		   }
	  ]
  };

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

			{ this.state.players.map( player => {
				return (
					<Player
						playerName={player.playerName} 
						score={player.score}
						id={player.id}
						key={player.id.toString()}
						removePlayer={this.handleRemovePlater}
					/>
				)
			})}
		</div>
	);
  }
}

export default App;
