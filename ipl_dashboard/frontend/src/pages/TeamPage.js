import {React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LargeDetailedCard } from '../component/LargeDetailedCard'
import { SmallDetailedCard } from '../component/SmallDetailedCard'

export const TeamPage=() => {

    const [team, setTeam] =useState({matches: []});
    const { teamName } = useParams();


   useEffect(
    ()=> {
        const fetchMatches = async () => {
           const response = await fetch(`http://localhost:8080/team/${teamName}`)
           const data= await response.json();
           //console.log(data);
           setTeam(data);
        };
        fetchMatches();
     },[teamName]
   )


   if(!team || !team.teamName){
      return <h1>Team Not Found </h1>
      }

    return (
       <div className='TeamPage'>
       <h1>{team.teamName}</h1>
       <h3>Match Details</h3>
       <LargeDetailedCard teamName = {team.teamName} match = {team.matches[0]}/>
       {team.matches.slice(1).map (match => <SmallDetailedCard teamName = {team.teamName} match = {match}/>)}
       </div>
    )
}
