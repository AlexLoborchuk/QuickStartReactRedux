import React from 'react';
import Profile from './profile_page';
import {connect} from 'react-redux';
import {compose} from 'redux';
import FetchingPage from './common/FetchingPage'
import {withRouter} from 'react-router-dom';

import {setProfileAC, savePhotoThunk, getProfileThunk, saveProfileDataThunk} from '../store/reducer/profile_reducer';
import {SetUsersAC} from '../store/reducer/user_reducer';
import {LoadingAC} from '../store/reducer/common_reducer';
import {Redirect} from 'react-router-dom';

import {userApi} from '../API/api';


class ProfileApi extends React.Component{
	componentDidMount(){
		let userId = this.props.match.params.userId;
		this.props.getProfile(userId);
		userApi.getUsers().then(resp =>{
			this.props.setUsers(resp.items)
		})
	 }
	render () {
		return <div>
			{ this.props.fetching ? <FetchingPage /> :
			 	<Profile  {...this.props}
			 	profileData = {this.props.profileData}
				isOwner = {this.props.match.params.userId == this.props.autorizedUserId ? true : false}
				users = {this.props.bestFriends}
				savePhoto = {this.props.savePhoto}
				setProfile = {this.props.setProfile}/>
			}
		</div>
	}
}

 let mapStateToProps =(state)=>{
 	return{
 		profileData: state.profile.profileData,
 		bestFriends: state.user_info.users,
 		fetching: state.common.isfetching,
 		autorizedUserId: state.auth.userId
 	}
 }

let mapDispatchToProps=(dispatch)=>{
 	return{
 		setProfile:(profileData)=>{
			dispatch(setProfileAC(profileData))
 		},
 		setUsers:(users)=>{
			dispatch(SetUsersAC(users))
 		},
 		Data_Loading:(fetching)=>{
 			dispatch(LoadingAC(fetching))
 		},
 		savePhoto:(newPhoto) =>{
 			dispatch(savePhotoThunk(newPhoto))
 		},
 		getProfile:(userId) =>{
 			dispatch(getProfileThunk(userId))
 		},
 		saveProfileData:(newProfileData) =>{
 			dispatch(saveProfileDataThunk(newProfileData))
 		}
 	}
 }

export default compose (
	connect (mapStateToProps, mapDispatchToProps),
	withRouter)(ProfileApi)

// let RouterProfileApi = withRouter(ProfileApi);

// let ProfileContainer = connect (mapStateToProps, mapDispatchToProps)(RouterProfileApi)

// export default ProfileContainer
