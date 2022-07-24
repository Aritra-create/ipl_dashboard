import React from 'react'
import { Link } from 'react-router-dom';

import { Largedetailedcard } from '../styles/Largedetaildedcard.css'

export const LargeDetailedCard = ({key, teamName, match }) => {
  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  let t1 = match.team1.substring(0, 1);
  for (var i = 0; i < match.team1.length; i++) {
    if (match.team1.charAt(i) === ' ')
      t1 = t1 + match.team1.substring(i + 1, i + 2)
  }

  let t2 = match.team2.substring(0, 1);
  for (let i = 0; i < match.team2.length; i++) {
    if (match.team2.substring(i, i + 1) === ' ')
      t2 = t2 + match.team2.substring(i + 1, i + 2)
  }
  //console.log(t1);

  return (
    <div className='LargeDetailedCard'>
      <span className="vs">vs</span>
      <h1>
        <Link to={"/teams/" + otherTeam}> {otherTeam}</Link>
      </h1>
      <div className="match-summary">
        <div className="match-details">
          <h3 className='matchdate'>{match.date}</h3>
          <h3 className='playerofthematch'>Man of the Match - {match.playerOfMatch}</h3>
          <h3 className='matchvenue'>{match.venue}</h3>
        </div>
        <div className="match-extra-detail">
          <h3>First Innings - {t1}</h3>
          <h3>Second Innings - {t2}</h3>
        </div>
        <h3 className='matchres'>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
      </div>
    </div>
  )
}
