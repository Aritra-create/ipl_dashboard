import React from 'react'
import { Link } from 'react-router-dom';

export const LargeDetailedCard = ({teamName, match}) => {
  if(!match) return null;

  const otherTeam = match.team1 == teamName ? match.team2 : match.team1;
  return (
    <div className='LargeDetailedCard'>
      <h1>vs
      <Link to={"/teams/" + otherTeam }> {otherTeam}</Link>
      </h1>
      <h3>{match.date}</h3>
      <h3>Man of the Match - {match.playerOfMatch}</h3>
      <h3>{match.venue}</h3>
      <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
    </div>
  )
}
