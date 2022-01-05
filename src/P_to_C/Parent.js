import React, { Component } from 'react'

import Child from './Child';

export default class Parent extends Component {
    render() {
        const data="Hello EveryOne";
        return (
            <div>
                <Child data={data}/>
            </div>
        )
    }
}
