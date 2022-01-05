import React, { Component } from 'react'

class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            clicks:0,
            show:true
        };
    }

    IncrementItem =() =>{
        this.setState({ clicks: this.state.clicks + 1});
        console.log(this.state.clicks);
    }

    DecreaseItem = () =>{
        this.setState({ clicks: this.state.clicks -1});
    }

    ToggleClick = () =>{
        this.setState({show: !this.state.show});
    }



    render() {
        return (
            <div>
               <button onClick={this.IncrementItem}>Increment</button> 
               <button onClick={this.DecreaseItem}>Decrease</button> 
               <button onClick={this.ToggleClick}>
                { this.state.show ?'Hide number' : 'show number'}   
                </button> 
                { this.state.show ? <h2>{ this.state.clicks }</h2>:'' }
            </div>
        )
    };
}


export default Index;
