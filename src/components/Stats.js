import React from 'react';

const Stats = (props) => {
  const ammountOfPlayers = props.players.length;
  
  const ammountOfPoints = props.players.reduce( (total, player) => {
    return total + player.score;
  }, 0);
  
    return(
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{ ammountOfPlayers }</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{ ammountOfPoints }</td>
          </tr>
        </tbody>
      </table>
    );
}

export default Stats;