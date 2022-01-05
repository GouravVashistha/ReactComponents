import React, { Component } from 'react'

import Child from '../C_to_P/Child';

export default class Parent extends Component {
    state = {
        msg: "",
    }

    handleCallback = (childData) =>{
        this.setState({msg: childData})
    }

    render() {
        const {msg} = this.state;
        return (
            <div>
                <h1> {msg} </h1>
                <Child parentCallback = {this.handleCallback}/>
            </div>
        )
    }
}
