import React from 'react';
import Users from './user_page';
import {connect} from 'react-redux';
import {CurrentPageAC, 
		getUsers,
		UserFollowed,
		UserUnFollowed} from '../store/reducer/user_reducer';
//import Fetching from '../Assets/loading.gif';



 let mapStateToProps =(state)=>{
 	return{
 		users: state.user_info.users,
 		pageSize: state.user_info.pageSize,
 		totalCount: state.user_info.totalCount,
 		currentPage: state.user_info.currentPage,
 		fetching: state.common.isfetching,
 		authUserId: state.auth.userId
 	}
 }

let mapDispatchToProps=(dispatch)=>{
 	return{
 		// userAdd:(user)=>{
			// dispatch(UserAddAC(user))
 		// },
 	// 	logOut:()=>{
 	// 		//dispatch(loginAC(false))
 	// 		dispatch(logout())
		// },
		getUsers: (currentPage, pageSize) =>{
			dispatch(getUsers(currentPage, pageSize))
		},
		CurrentPage: (currentPage) =>{
			dispatch(CurrentPageAC(currentPage))
		},
		Followed: (userId)=>{
			dispatch(UserFollowed(userId))
		},
		UnFollowed: (userId)=>{
			dispatch(UserUnFollowed(userId))
		}
 	}
 }

// class UserContainer extends React.Component{
// 	render(){
// 		return <div>
// 			{this.props.fetching ? <img src = {Fetching} alt= "Loading" style={{marginLeft: "250px"}}/> : <Users {...this.props} />}
// 		</div>
// 	}
// }

//let UsersPageWithFetching = withFetchingConnect(UserContainer)
let UserContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer;