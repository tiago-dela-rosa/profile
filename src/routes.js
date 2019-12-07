import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';


export default function Routes(){
	return (
		<BrowserRouter>
			<Route path="/" exact component={Home} />
			<Route path="/profile" exact component={Profile} />
			<Route path="/tindev" exact component={Login} />
			<Route path="/tindev/dev/:id" component={Main} />
		</BrowserRouter>
	);
}