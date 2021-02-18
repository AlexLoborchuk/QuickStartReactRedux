import {userApi, securityApi} from '../../API/api'

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
};

const authReducer = (state = initialState, action) =>{
	switch(action.type){
		case SET_USER_DATA:
			return {...state, ...action.data}
		case GET_CAPTCHA_URL_SUCCESS: 
			return {...state, captchaUrl :action.captchaUrl}
		default: 
			return state
	}
}


export const setAuthUserData = (userId,email,login, isAuth) =>({type: SET_USER_DATA, data:{userId,email,login, isAuth}})
const getCaptchaUrlSuccess =(captchaUrl) =>({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl})


export const UserAutorized=()=>(dispatch)=>{
	userApi.auth().then( resp =>{
			if(resp.data.resultCode === 0){
				let {id,email,login} = resp.data.data;
			dispatch(setAuthUserData(id,email,login, true));
			}
		});
}

export const getCaptchaUrlThunk =() => async (dispatch)=>{
	let resp = await securityApi.getCaptchaUrl();
		const captchaUrl = resp.data.url;
		dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const login=(email, password, captcha)=>(dispatch)=>{
	userApi.login(email, password, captcha)
	.then( resp =>{
			if(resp.data.resultCode === 0){
				dispatch(UserAutorized())
			}
			else{
		 		if(resp.data.resultCode === 10){
					dispatch(getCaptchaUrlThunk())
				}
				else {
					alert("Wrong email or password")
				}
			}
		});
}

export const logout=()=>(dispatch)=>{
	userApi.logout()
	.then( resp =>{
			if(resp.data.resultCode === 0){
				dispatch(setAuthUserData(null, null, null, false))
			}
		});
}


export default authReducer