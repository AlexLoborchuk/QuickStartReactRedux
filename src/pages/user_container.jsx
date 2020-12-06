import React from 'react';
import {Redirect} from 'react-router-dom';
import Users from './user_page';
import {connect} from 'react-redux';
import {loginAC} from '../store/reducer/common_reducer';
import {UserAddAC} from '../store/reducer/user_reducer';
import {SetUsersAC} from '../store/reducer/user_reducer'

 let mapStateToProps =(state)=>{
 	return{
 		users: state.user_info,
 		redirect: state.common.redirect
 	}
 }

let mapDispatchToProps=(dispatch)=>{
 	return{
 		 userAdd:(user)=>{
			dispatch(UserAddAC(user))
 		},
 		logOut:()=>{
 			dispatch(loginAC(false))
		},
		setUsers: (users) =>{
			dispatch(SetUsersAC(users))
		}
 	}
 }

let UserContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer;