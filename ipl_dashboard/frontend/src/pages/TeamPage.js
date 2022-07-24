import {React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LargeDetailedCard } from '../component/LargeDetailedCard';
import { SmallDetailedCard } from '../component/SmallDetailedCard';
import { PieChartCard } from '../component/PieChartCard';
import { Teampage } from '../styles/Teampage.css';

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
         <div className="teamnameContainer">
           <h1>{team.teamName}</h1>
         </div>

         <div className="win-lossDetailsContainer">
          <h3>Wins/Losses</h3>
           <PieChartCard className="piechartcard" win = {team.totalWins} matches = {team.totalMatches}/>
         </div>
       
         <div className="largeDetailedCardContainer">
           <LargeDetailedCard teamName = {team.teamName} match = {team.matches[0]}/>
         </div>
       
         <div className="smallDetailCardContainer">
           {team.matches.slice(1).map (match => <SmallDetailedCard teamName = {team.teamName} match = {match}/>)}
         </div>


         <div className='more-section'>
            <a className='more-link' href="#">more</a>
         </div>
       </div>
    )
}
