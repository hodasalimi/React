import React, {Component } from 'react';
import axios from 'axios';
import {Link , NAVLink} from 'react-router-dom';
import {URL_SALES} from '../utils/pathes';

class Sale extends Component {
    state = {

    }
    fetchSales(){
        
            axios.get(URL_SALES)
            .then(response =>{
                this.setState({
                    sales: response.data
                })
            })    
    }
    componentDidMount(){
        
    }

    render() {
        return (
            <>
            <div className="container col-sm-12 text-center my-2 display-4">
                Sales
            </div>
            <div className="sale-container col-sm-12 my-3 p-2">
                {this.state.sales ?
            <div className="sale-container d-flex">
                {this.state.sales.map(
                    <Link className="sale-item">

                    </Link>
                )}
            </div>    
            : null}
            </div>
            </>
        )
    }
}
export default Sale;