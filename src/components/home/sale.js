import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {URL_SALES} from '../utils/pathes';



class Sale extends Component {
    
    state = {
        salesArray : []
    }


    componentDidMount(){
        axios.get(URL_SALES)
            .then(response =>{
                   this.setState({
                        salesArray: response.data
                   }) 
            })
    }
    

    
    render() {
        console.log(this.state)
        return (
            <>
                <div className="container col-sm-12 text-center my-2 display-4">
                    Sales
                </div>
                <div className="container m-auto text-center col-sm-12 my-3 p-2">
                   { 
                        this.state.salesArray ?
                            <div className="sale-container  d-flex flex-row justify-content-around flex-wrap align-content-center">
                                {
                                    this.state.salesArray.map( item =>(
                                       
                                        <Link to="" className="sale-item" key={item.saleId} style={{background :`url(/images/sales/${item.cover}) no-repeat `}}>
                                            <div className="item-percent">10</div>
                                        </Link>
                                       
                                       
                                    )
                                )}
                            </div>
                        : 
                        null
                    }

                </div>
            </>
        )
    }
}
export default Sale;