import { React } from 'react';
import { Link } from 'react-router-dom';

import { teamtile } from '../styles/Teamtile.css'

export const TeamTile = ({teamName}) => {


    return (
        <div className="TeamTile">
            <h2>
                    <Link className='team' to={`/teams/${teamName}`}>
                        {teamName}
                    </Link>
                </h2>
        </div>
    )
}