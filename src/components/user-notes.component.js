import React, { Component } from 'react'
import axios from 'axios';
import {  Link } from "react-router-dom";
import "./admin-vid.css"

class UserNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Notes: []
        }
    }

    componentDidMount = () => {
        this.getNotes();
    }

    getNotes() {
        axios.get('http://localhost:8080/api/notes')
            .then((response) => {
                console.log(response);
                this.setState({
                    Notes: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    

    render() {
        const { Notes } = this.state;
        return (
            <div className='videoList'>
            <h3>Notes List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Note Title</th>
                            <th>Note Detail</th>
                            <th>Date created</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Notes && Notes.map((note, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{note.title}</td>
                                        <td>{note.note}</td>
                                        <td>{note.date}</td>
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

export default UserNotes;