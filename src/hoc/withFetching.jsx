import React from 'react';
import Fetching from '../Assets/loading.gif';
import {connect} from 'react-redux';


let mapStateToProps =(state)=>{
	return {
		fetching: state.common.isfetching
	}
}
const withFetching = (Component) =>{
	class withFetchingComponent extends React.Component {
		render (){
			if (this.props.fetching) return <img src = {Fetching} alt= "Loading" style={{marginLeft: "250px"}}/> 
			return <Component {...this.props}/>}
		}
	}

let withFetchingConnect = connect (mapStateToProps)(withFetching)

export default withFetchingConnect