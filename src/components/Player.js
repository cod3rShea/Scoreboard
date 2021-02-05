import React from 'react';

import Counter from './Counter';

const Player = (props) => {
	return(
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
				{props.playerName}
			</span>
			{<Counter 
				changeScore={props.changeScore} 
				index={props.index}
				score={props.score}	
			/>}
		</div>
	);
  }
  
export default Player;