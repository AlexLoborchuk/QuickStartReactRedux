import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Login from './login';
import {connect} from 'react-redux';
import {loginAC} from '../store/reducer/common_reducer';
import {changeAC} from '../store/reducer/login_reducer'


let mapStateToProps =(state)=>{
	return {
		login: state.login,
		redirect: state.common.redirect
	}
}
let mapDispatchToProps =(dispatch)=>{
	return {
		SubmitUser: (user)=>{
			dispatch(changeAC(user))
			dispatch(loginAC(true))
		},
	}
}



 const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginPage;