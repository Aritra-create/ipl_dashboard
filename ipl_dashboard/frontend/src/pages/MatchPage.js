import React, { useState } from 'react'
import { LargeDetailedCard } from '../component/LargeDetailedCard';
import { useParams } from 'react-router-dom';

export const MatchPage = () => {
  const [match, setMatch] = useState([]);
  const { teamName, year } = useParams();

  useState(
    ()=>{
        const fetchMatches =async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data =await response.json();
            setMatch(data);
        };
        fetchMatches();
    },[]
  )

  return (
    <div className='MatchPage'>
      <h1>{teamName}</h1>
      {
        match.map(match => <LargeDetailedCard teamName = {teamName} match = {match}/>)
      }
    </div>
  )
}
