import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import loginAPI from '../../../api/loginAPI'

function PrivateLink(props) {
    const user =  useSelector(state => state.rootReducer.loginReducer.loginInfo) ;
  
    if(user.id)
    return (
    <Link {...props} >
        {props.children}
    </Link>
     )
     else {
         return <Link to="/login" >
            {props.children}
            </Link>
     }
}

export default PrivateLink