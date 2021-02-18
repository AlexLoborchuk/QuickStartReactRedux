import React from 'react';
import {Redirect,Link} from 'react-router-dom';
import LoginReduxForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../store/reducer/auth_reducer';
import '../style/login_module.css';


 const Login =(props)=>{
 	let user ={email: props.login.email,pass: props.login.pass };
 // 	const changeEmail=(e)=>{
	// 	user.email = e.target.value
	// }
	// const changePass=(e)=>{
	// 	user.pass= e.target.value
	// }
	// const handleSubmit =(event)=>{
	// 	event.preventDefault();
	// 	props.SubmitUser(user);
	// }
	const handleSubmit =(user)=>{
		props.login(user.email, user.password, user.captcha);
	}
	if(props.isAuth) {
		return <Redirect to={"/profile/" + props.userId}/>
	}
 	return (<div className="body">
 		<div className="main_block">
 			<div className="header_text">LOGIN</div>
			<LoginReduxForm redirect = {props.redirect} captchaUrl={props.captchaUrl} onSubmit={handleSubmit}/>
		</div>
	</div>)
 }

const mapStateToProps =(state)=>({
	isAuth: state.auth.isAuth,
	userId: state.auth.userId,
	captchaUrl: state.auth.captchaUrl
})


export default connect (mapStateToProps, {login}) (Login);