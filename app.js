const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return(
        <div className="player">
            <span className="player-name">
                {props.playerName}
            </span>
            {<Counter />}
        </div>
    );
}


class Counter extends React.Component {

    state = {
        score: 0,
    };
    
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
            if ( prevState.score == 0 || isNaN(prevState.score) ){
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
          <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
          <span className="counter-score">{ this.state.score }</span>
          <button className="counter-action increment" onClick={this.incrementScore}> + </button>
        </div>
      );
    }
  }

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
                            playerScore={player.playerScore}
                            key={player.id.toString()}
                        />
                    )
                })}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );