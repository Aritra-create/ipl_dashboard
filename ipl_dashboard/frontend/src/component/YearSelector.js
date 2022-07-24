import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom';
import { Yearselector } from '../styles/Yearselector.css'

export const YearSelector = ( {teamName} ) => {
    
  let year=[];
  const startYear=process.env.REACT_APP_DATA_START_YEAR;
  const endYear=process.env.REACT_APP_DATA_END_YEAR;

  for(let i = startYear; i <= endYear; i++ )
  {
    year.push(i);
  }


  return (
    <ul className='year-selector'>
   { year.map(years => (
     <li>
        <Link to={`/teams/${teamName}/matches/${years}`}>{ years }</Link>
      </li>
   ))}
    </ul>
  )
}
