const players =   [
 {
    playerName: "Mike",
    playerScore: 50,
    id: 1
  },
  {
    playerName: "Shelbey",
    playerScore: 85,
    id: 2
  },
  {
    playerName: "Same",
    playerScore: 95,
    id: 3
  },
  {
    playerName: "Joey",
    playerScore: 80,
    id: 4
  }
];

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
        score: 20,
    };
    
    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    }

    incrementScoore = () => {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
          <span className="counter-score">{ this.state.score }</span>
          <button className="counter-action increment" onClick={this.incrementScoore}> + </button>
        </div>
      );
    }
  }

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={props.initialPlayers.length}     
            />
            {/* Players List */}

            { props.initialPlayers.map( player => {
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

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
  );