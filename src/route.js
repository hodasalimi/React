import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import Header from './components/header';
import SignIn from './components/signin/signin';
import FormFields from './components/widgets/FormFields/formFields';

const Routes = () =>(
    <BrowserRouter>
    <Header/>
    <Switch>
        
        <Route path="/login" exact component={SignIn}/>
        <Route path="/" exact component={Home}/>

    </Switch>
    <Footer/>
    </BrowserRouter>

)
export default Routes;