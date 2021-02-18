import {profileApi, userApi} from '../../API/api';
import {LoadingAC} from './common_reducer'


const SET_PROFILE = 'SET-PROFILE';
const UPDATE_PHOTO = 'UPDATE-PHOTO';


let initialState = {profileData: {fullName: null, photos: {small: null}, aboutMe: null}};

	const profileReducer =(state = initialState, action)=>{		
		switch(action.type){
		 	case SET_PROFILE:
				return {...state, profileData: action.profileData};
			case UPDATE_PHOTO:
				return {...state, profileData: {...state.profileData, photos: action.photos}}
			default:
				return state;
		}
	}

export default profileReducer;


export const setProfileAC = (profileData)=>({type: SET_PROFILE, profileData: profileData});
export const updatePhoto = (photos) =>({type: UPDATE_PHOTO, photos})

export const savePhotoThunk = (newPhoto) => async (dispatch)=>{
	let resp = await profileApi.saveAvatar(newPhoto)
	
	if(resp.data.resultCode === 0){
		dispatch(updatePhoto(resp.data.data.photos))
	}	
}
export const getProfileThunk = (userId) => (dispatch) =>{
	userApi.getProfile(userId).then(resp =>{
		dispatch(setProfileAC(resp.data));
		dispatch(LoadingAC(false));
	})
	dispatch(LoadingAC(true));
}
export const saveProfileDataThunk = (newProfileData) => async (dispatch, getState)=>{
	let authUserId = getState().auth.userId;
	let resp = await profileApi.saveProfile(newProfileData);

	if(resp.data.resultCode === 0){
		dispatch(getProfileThunk(authUserId))
	}	
}