import React, { Component } from 'react';
import SignIn from '../signin/signin';
import FormFields from '../widgets/FormFields/formFields';
import HomeSlider from './slider';
import OnlineShopOffer from './onlineShopeOffer';
import Sale from './sale';
class Home extends Component{

    render(){
        return(
            <> 
        
                <HomeSlider/>
                <OnlineShopOffer/>
                <Sale/>
                
            
            </>
        )
    }
}

export default Home;