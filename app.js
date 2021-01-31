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
        </div>
    );
}

ReactDOM.render(
    <Player />,
    document.getElementById('root')
  );