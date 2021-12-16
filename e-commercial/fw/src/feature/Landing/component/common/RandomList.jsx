import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, getRandom, loadRandom } from '../../landingSlice';

function RandomList(props) {
   const random = useSelector(getRandom);
//    console.log(random)
    
    
    return (
        <ul className="feature__menu-list" >
           {random && random.map((ele,i) =><li key={i} className="feature__menu-option"><a href="#!">{ele.name}</a></li> )}
      
        </ul>
        
    )
}

export default RandomList;
