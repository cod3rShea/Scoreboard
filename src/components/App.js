import React from 'react';
import Header from './Header';
import Player from './Player';

class App extends React.Component {
  state = {
      players: [
          {
             playerName: "Mike",
             id: 1
           },
           {
             playerName: "Shelbey",
             id: 2
           },
           {
             playerName: "Same",
             id: 3
           },
           {
             playerName: "Joey",
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
