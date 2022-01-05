import React, { Component } from 'react'

export default class Child extends Component {
  
    render() {
        return (
            <div>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}








// import React, { Component } from 'react'

// export default class Child extends Component {
//     render() {
//         const Child = (props)=>{
//             return (
//                 <div>
//                     <h2>{props.data}</h2>
//                 </div>
//             )
//         }
       
//     }
// }
