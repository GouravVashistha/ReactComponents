import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = { email: '', name: '', age: null, address: '', phoneNo: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event) {
        const { email, name, age, address, phoneNo } = this.state
        event.preventDefault()
        alert(`
                ____Your Details____\n
                Email : ${email}
                Name : ${name}
                Age : ${age}
                Address : ${address}
                Phone No : ${phoneNo}
            `)
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>form data print</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div>
                    <label htmlFor="name">Name</label>
                    <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="phoneNo">Phone Number</label>
                    <input name="phoneNo" placeholder="PhoneNo" value={this.state.phoneNo} onChange={this.handleChange} />
                </div>

                <div>
                    <button>Create Account</button>
                </div>
            </form>
        )
    }
}
