import React, { Component } from 'react'

export default class DataApi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res =>res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items   : json,
                })
        });
    }

    render() {


        var { isLoaded ,items } = this.state;

        if(!isLoaded){
            return <div>Loading...</div>;
        }
        else{
            return (
                <div >
                     <ul>
                         
                        {items.map(item => (
                             <li key = {item.id} >
                               Name:  {item.name} |  Email : {item.email}
                            </li>
                      ))};
                  </ul>
                  <div>
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Address</th>
                      </tr>
                                
                      {items.map(item => (
                        <tr>
                             <td>{item.id}</td>
                             <td>{item.name}</td>
                             <td>{item.email}</td>
                             <td>{item.address.city} ZipCode:{item.address.zipcode}</td>
                         </tr>
                      ))};
                      
                  </div>
                </div>
            );
        }

       
    }
}
