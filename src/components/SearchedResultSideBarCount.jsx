import { CountertopsRounded } from '@mui/icons-material'
import React, { useState } from 'react'

function SearchedResultSideBarCount({title, onclick, active, count}) {

  


  return (
    <div className="countContainer">


        <li  className={`countContainer__listitems  ${active? 'countContainer__active' : ''}` } onClick = {onclick} >
        <p className="countContainer__movie">{title}</p>
        {/* <span className="countContainer__movieCount">
            {count ? count.total_results : ''}

            </span> */}
        </li> 


    </div>
  )
}

export default SearchedResultSideBarCount;