import React, { useEffect, useState } from 'react'

import { Homepage } from '../styles/Homepage.css'
import { TeamTile } from '../component/TeamTile';

export const HomePage = () => {

    const [teams, setTeams] = useState([]);
    useEffect(
        () => {
            let isCancelled =false;
            const fetchAllTeams = async () => {
            const response = await fetch('http://localhost:8080/team');
            const data = await response.json();
            if(!isCancelled)
                {
                  setTeams(data);
                }
            setTeams(data);

         };
         fetchAllTeams();
         
         return () =>{
            isCancelled =true;
        }

        }, []
    );

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL Dashboard</h1>
            </div>
            <div className="team-grid">
                { teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />)}
            </div>
        </div>
        
    );
}
