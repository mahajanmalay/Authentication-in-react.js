import React, { Component } from 'react';
import axios from 'axios';
import "./admin-add-video.css"



class UserEnquire extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        phone: '',
        email:'',
        enquiry:''
        }
    }

    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To add new employee when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, phone, email, enquiry } = this.state;
        axios.post('http://localhost:8080/api/enquiry', {
            name: name,
            phone: phone,
            email:email,
            enquiry:enquiry
     
        })
        .then((response) => {
        alert("Enquiry Sent !! You Will Recieve The Response Soon...!! Thanks!!")
        console.log(response);
        })
        .catch((error) => {
        console.log(error);
        });
        }

    render() {
        return (
            <div className="AddFormcontainer">
            <h4>Write Your Enquiry</h4>
                <form  onSubmit={this.handleSubmit}>
                <label>
                        Name
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Phone
                        <input
                            name="phone"
                            type="number"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Email
                        <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Enquiry
                        
                        <textarea name="enquiry" className="form-control"
 type="text" onChange={this.handleChange} value={this.state.enquiry}  cols="30" rows="10">Write Your Enquiry Here</textarea>
                    </label>
                    
                    <br />
                    <input
                        type="submit"
                        value="submit"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}

export default UserEnquire;