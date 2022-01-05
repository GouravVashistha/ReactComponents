import React, { Component } from 'react'

export default class Child extends Component {
    
    onTrigger =()=>{
        this.props.parentCallback("welcome my Website")
    }

    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <button onClick={this.onTrigger}>Click on</button>
            </div>
        )
    }
}
