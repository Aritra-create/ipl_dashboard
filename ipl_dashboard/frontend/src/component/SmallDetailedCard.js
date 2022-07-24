import React from 'react'
import { Link } from 'react-router-dom';

import { Smalldetailsdcard } from '../styles/Smalldetailscard.css'

export const SmallDetailedCard = ({teamName, match}) => {
  const otherTeam = match.team1 == teamName ? match.team2 : match.team1;
  return (
    <div className='SmallDetailedCard'>
      <span className="vs">vs</span>
      <h4 className='teamname'>
        <Link to={"/teams/" + otherTeam }> {otherTeam}</Link> 
        </h4>
      <h6 className='match-date'>{match.date}</h6>
      <h6 className='match-winner'>{match.matchWinner} won by {match.resultMargin} {match.result}</h6>
    </div>
  )
}
 