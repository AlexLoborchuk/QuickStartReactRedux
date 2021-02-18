import React from 'react';
import Header from './Header';
import {userApi} from '../../API/api.js';
import {connect} from 'react-redux';
import {UserAutorized, logout} from '../../store/reducer/auth_reducer'
import {Redirect} from 'react-router-dom'
class HeaderContainer extends React.Component{

	componentDidMount(){
		this.props.UserAutorized();
		// userApi.auth().then( resp =>{
		// 	if(resp.data.resultCode === 0){
		// 		let {id,email,login} = resp.data.data;
		// 		this.props.setAuthUserData(id,email,login);
		// 	}
		// });
	}

	render(){
		return  (<div>
			{this.props.isAuth ?  <Header {...this.props}/> : <Redirect to="/login"/>}
		</div>)
	}
}

const mapStateToProps =(state)=>({
	isAuth: state.auth.isAuth,
	name: state.profile.profileData.fullName	
})

export default connect (mapStateToProps, {UserAutorized, logout}) (HeaderContainer);

