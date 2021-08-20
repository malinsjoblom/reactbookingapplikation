import React from 'react';
import ProductList from './Products/ProductList';
import Menu from './Navbar/Menu';
import Login from './Login/Login';
import Checkout from './Bookings/Checkout';
import Register from './Login/Register';
import AddToProduct from './Products/AddToProduct';
import ForgotPassword from './Login/ForgotPassword';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import UserProfile from './Login/UserProfile';


export default function AppRoute(){
    return (

        <>

        <Router>
            <Menu />
            <Switch>
            <Route path='/'exact component={ProductList} />
            <Route path='/form' component={AddToProduct} />
            <Route path='/login' component={Login} />
            <Route exact path='/checkout' component={Checkout} />
            <Route path='/register' component={Register} />
            <Route path='/forgotpassword' component= {ForgotPassword} />
            <Route path='/userprofile' component={UserProfile} />
            </Switch>
        </Router>

        </>
    )
}
