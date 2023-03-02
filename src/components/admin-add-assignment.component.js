import React, { Component } from 'react';
import axios from 'axios';
import "./admin-add-video.css"



class AddAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        title: '',
        detail: '',
        lastd:''
        }
    }

    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To add new employee when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { title, detail, lastd } = this.state;
        axios.post('http://localhost:8080/api/assignment', {
            title: title,
            assignment: detail,
            lastd:lastd
     
        })
        .then((response) => {
        alert("Assignment added Succesfully")
        console.log(response);
        })
        .catch((error) => {
        console.log(error);
        });
        }

        

    render() {
        return (
            <div className="AddFormcontainer">
            <h4>Add Assignment</h4>
                <form  onSubmit={this.handleSubmit}>
                <label>
                        Title
                        <input
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Assignment
                        <input
                            name="detail"
                            type="text"
                            value={this.state.detail}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Date
                        <input
                            name="lastd"
                            type="date"
                            value={this.state.lastd}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    
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

export default AddAssignment;