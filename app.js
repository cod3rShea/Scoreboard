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

const App = () => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={2}     
            />
            {/* Players List */}
            <Player 
                playerName="Mike"
                playerScore={20}
            />
            <Player 
                playerName="Shelbey"
                playerScore={21}
            />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );