const players =   [
 {
    playerName: "Mike",
    playerScore: 50
  },
  {
    playerName: "Shelbey",
    playerScore: 85
  },
  {
    playerName: "Same",
    playerScore: 95
  },
  {
    playerName: "Joey",
    playerScore: 80
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
            {<Counter score={props.playerScore} />}
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
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