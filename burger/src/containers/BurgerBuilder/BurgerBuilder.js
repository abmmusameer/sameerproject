import React, { Component } from 'react';


import Burger from '../../components/Burger/Burger';
import BuildControls from  '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = { 
            ingredients: {
                salad: 0,
                bacon: 0,
                cheease: 0,
                meat: 0
            }
      }
    }
 
    render () {
        return (
         
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
           
        );
    }
}

export default BurgerBuilder;