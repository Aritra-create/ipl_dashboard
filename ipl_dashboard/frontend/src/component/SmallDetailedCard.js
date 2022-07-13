import React from 'react'
import { Link } from 'react-router-dom';

export const SmallDetailedCard = ({teamName, match}) => {
  const otherTeam = match.team1 == teamName ? match.team2 : match.team1;
  return (
    <div className='SmallDetailedCard'>
      <h4>vs
        <Link to={"/teams/" + otherTeam }> {otherTeam}</Link> 

        </h4>
      <h6>{match.date}</h6>
      <h6>{match.matchWinner} won by {match.resultMargin} {match.result}</h6>
    </div>
  )
}
 