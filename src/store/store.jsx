 import loginReducer from './reducer/login_reducer'
 import profileReducer from './reducer/profile_reducer'
 import commonReducer from './reducer/common_reducer'
let store = {
	state:{
		common:{redirect: false},
		login:{
			email: "loboralex@gmail.com",
			pass: 'helo',
		},
		user_info:[
			{name: 'Alex',surname: 'Lobor'}]
	},
	getState(){
		return this.state;
	},
	rerenderEntireTree(){},
		subscribe (observer){
	 	this.rerenderEntireTree = observer;
	},

	dispatch(action){

		this.state.login = loginReducer(this.state.login, action)
		this.state.common = commonReducer(this.state.common, action)
		this.state.user_info = profileReducer(this.state.user_info, action)
		this.rerenderEntireTree(this.state)
	}
}

export default store