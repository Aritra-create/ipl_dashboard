import React, {useEffect, useState} from 'react'
import { LargeDetailedCard } from '../component/LargeDetailedCard';
import { Matchpage } from '../styles/Matchpage.css'
import { useParams } from 'react-router-dom';
import { YearSelector } from '../component/YearSelector';

export const MatchPage = () => {


    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();
    useEffect(
        () => {
         const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);

         };
         fetchMatches();
            


        }, [teamName, year]
    );

   
    return (
        <div className="MatchPage">
            <div className="yearSelector">
                <h1> Select Year </h1>
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h1 className="page-title">{teamName} matches in {year}</h1>
                {
                    matches.map(match => <LargeDetailedCard teamName={teamName} match={match} />)
                }
            </div>

        </div>
    );
}