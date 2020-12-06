import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios  from 'axios'

export default class Users extends React.Component{
	state={
		name: '',
		surname: ''
	}
	componentDidMount(){
		axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=25').then(resp =>{
			this.props.setUsers(resp.data.items)
		
		})
		// this.props.setUsers([
		// 		{name: 'Alex',surname: 'Lobor'},
		// 		{name: 'Andrew',surname: 'Loborchuk'}
		// 	])
	}
	changeName=(e)=>{
		this.setState({name: e.target.value})
	}
	changeSurname=(e)=>{
		this.setState({surname: e.target.value})
	}
	handleSubmit =(event)=>{
		event.preventDefault();
		let user = {name: this.state.name, surname: this.state.surname};
		//this.props.userAdd(user)
	}
	render() {
		let users = this.props.users.users.map((item, index)=>{
			return <div key={index}>
						<p>User: {item.name} {item.surname}</p>
					</div>
		});
		return (
			<div>
				{users}
				{/*<form onSubmit={this.handleSubmit}>
					<input type="text"  placeholder='name' onChange={this.changeName}/>
					<input type="text"  placeholder = 'surname' onChange={this.changeSurname}/>
					<button type='submit'>ACEPT</button>
				</form>*/}
				<button onClick={this.props.logOut}>{!this.props.redirect ? <Redirect to='/'/>: "LOGOUT"}</button>
			</div>
		);
	}
};

