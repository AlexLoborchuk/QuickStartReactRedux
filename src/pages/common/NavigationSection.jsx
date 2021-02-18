import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'; 
import {connect} from 'react-redux';
import '../../style/navigation.css';
import ShowOrHideImage  from '../../Assets/show_hide_icon.png'

const Navigation = (props) =>{
	return <div>
		<div style={{textAlign: 'right'}}>
			<button onClick={props.navigationState} className="show_hide_button">
				<img src={ShowOrHideImage} alt="Navigation button" className="navigation_image"/>
			</button>
		</div>
		<div className="navigation_bar">
			<NavLink to= {'/profile/'+ props.autorizedUserId} className="link">Profile</NavLink>
		</div>
		<div className="navigation_bar">
			<NavLink to='/user' className="link">Users</NavLink>
		</div>
	</div>
}

const NavigationContainer =(props)=>{
	let [showNavigation, setShowNavigatin] = useState(false)

	const navigationState =()=>{
		setShowNavigatin(!showNavigation)
	}
	return <div> 
		{showNavigation ? <Navigation {...props} navigationState={navigationState}/> 
		: 
		<div style={{marginLeft: "10px"}}>
			<button onClick={setShowNavigatin} className="show_hide_button">
					<img src={ShowOrHideImage} alt="Navigation button" className="navigation_image"/>
			</button>
			</div>}
	</div>
}

const mapStateToProps =(state)=> {
	return {
	autorizedUserId: state.auth.userId
	}
}



let NavigationSection =  connect (mapStateToProps, {}) (NavigationContainer)


export default NavigationSection