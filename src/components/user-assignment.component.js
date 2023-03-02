import React, { Component } from 'react'
import axios from 'axios';
import {  Link } from "react-router-dom";
import "./admin-vid.css"

class UserAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Assignments: []
        }
    }

    componentDidMount = () => {
        this.getAssignment();
    }

    getAssignment() {
        axios.get('http://localhost:8080/api/assignment')
            .then((response) => {
                console.log(response);
                this.setState({
                    Assignments: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    

    render() {
        const { Assignments } = this.state;
        return (
            <div className='videoList'>
            
            <h3>Assignment List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Assignment Title</th>
                            <th>Assignment</th>
                            <th>Submission date</th>
                            <th>Date created</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Assignments && Assignments.map((ass, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{ass.title}</td>
                                        <td>{ass.assignment}</td>
                                        <td>{ass.lastd}</td>
                                        <td>{ass.date}</td>
                                        {/* <td>
                                            <Link to={"/edit/:" + video._id} className="btn btn-primary">Edit</Link>
                                        </td> */}
                                       
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }


}

export default UserAssignment;