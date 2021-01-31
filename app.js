const Header = () => {
    return (
        <header>
            <h1>Scooreboard</h1>
            <span className="stats">Players: 1</span>
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
            <span className="counter-scoore">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

ReactDOM.render(
    <Player />,
    document.getElementById('root')
  );