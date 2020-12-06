import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/redux-store';
import {Provider} from 'react-redux';



/*<Provider store={store}>
store ={state} dispatch={store.dispatch.bind(store)}
rerenderEntireTree)
				</Provider>,

					rerenderEntireTree(store.getState())

	store.subscribe(()=>{
			rerenderEntireTree();
	})*/

	//let rerenderEntireTree =()=>{
		ReactDOM.render(
			<Provider store={store}>
		   		<App />
			</Provider>	, 	
	 	document.getElementById('root'));
	//}

