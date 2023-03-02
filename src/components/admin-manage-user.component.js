import React, { Component } from 'react'
import axios from 'axios';
import {  Link } from "react-router-dom";
import "./admin-vid.css"

class AdminManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            User: []
        }
    }

    componentDidMount = () => {
        this.getUser();
    }

    getUser() {
        axios.get('http://localhost:8080/api/user')
            .then((response) => {
                console.log(response);
                this.setState({
                    User: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    

        deleteUser = async (id) => {
            try {
              const res = await axios.delete('http://localhost:8080/api/user/'+id)
              alert('User successfully deleted.')
            } catch (error) {
              alert(error)
            }
            this.getUser()
          }
    

    render() {
        const { User } = this.state;
        return (
            <div className='videoList'>
            <h3>User List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> id</th>
                            <th>username</th>
                            <th>email</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            User && User.map((u, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{u._id}</td>
                                        <td>{u.username}</td>
                                        <td>{u.email}</td>
                                        
                                        <td>
                                            <button onClick={() => this.deleteUser(u._id)} className='btn-danger' bsStyle="danger" >Delete</button>
                                        </td>
                                        
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

export default AdminManageUser;