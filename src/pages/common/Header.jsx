import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../style/header.css'

const Header =(props)=>{
	return <div className='header'>
	{console.log(props.name)}
 			<div>	{props.name}
				<button onClick = {props.logout} className="logout">Log out</button> 
			</div>
	</div>
}


export default Header
