import React from 'react';
import {Redirect,Link} from 'react-router-dom';

 const Login =(props)=>{
 	let user ={email: props.login.email,pass: props.login.pass };
 	const changeEmail=(e)=>{
		user.email = e.target.value
	}
	const changePass=(e)=>{
		user.pass= e.target.value
	}
	const handleSubmit =(event)=>{
		event.preventDefault();
		props.SubmitUser(user);
	}
	
 	return (
 		<div>
			<form onSubmit={handleSubmit}>
				<input type="text"  defaultValue={user.email} onChange={changeEmail}/>
				<input type="password"  defaultValue={user.pass} onChange={changePass}/>
				<button type='submit' onClick ={props.toUser}>{props.redirect ? <Redirect to='/user'/>: 'LOGIN'}
				</button>
			</form>
			</div>)
 }

export default Login;