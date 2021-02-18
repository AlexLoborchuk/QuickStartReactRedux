import axios from 'axios';

const instanse = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers:{
		'API-KEY': '95db981d-de00-4dd4-82b8-1ff1e212405c'
	}
})


export const userApi = {
	getUsers(currentPage = 1, pageSize = 10){
		return instanse.get(`users?page=${currentPage}&count=${pageSize}`).
		then( resp =>{
			return resp.data;
		})
	},
	getProfile(userId = 1){
		return instanse.get(`profile/`+ userId);
	},
	follow(userId){
			return instanse.post(`follow/${userId}`, {});
	},
	unfollow(userId){
			return instanse.delete(`follow/${userId}`);
	},
	auth(){
		return instanse.get(`auth/me`);
	},
	login(email, password, captcha = null){
		return instanse.post(`auth/login`, {email, password, captcha})
	},
	logout(){
		return instanse.delete(`auth/login`);
	}
}

export const profileApi ={
	saveAvatar (newPhoto){
		let formData = new FormData();
		formData.append("image", newPhoto)
		return instanse.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	saveProfile (profile){
		return instanse.put(`profile`, profile)
	}
}

export const securityApi ={
	getCaptchaUrl (){
		return instanse.get(`security/get-captcha-url`);
	}
}