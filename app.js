const Header = (props) => {
    console.log(props);
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = () => {
    return(
        <div className="player">
            <span className="player-name">
                Mike
            </span>
            {<Counter />}
        </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scooreboard" totalPlayers={1} />
            {/* Players List */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );