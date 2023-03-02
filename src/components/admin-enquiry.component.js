import React, { Component } from 'react'
import axios from 'axios';
import {  Link } from "react-router-dom";
import "./admin-vid.css"

class AdminEnquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Enquiry: []
        }
    }

    componentDidMount = () => {
        this.getEnquiry();
    }

    getEnquiry() {
        axios.get('http://localhost:8080/api/enquiry')
            .then((response) => {
                console.log(response);
                this.setState({
                    Enquiry: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEnquiry = async (id) => {
        try {
          const res = await axios.delete('http://localhost:8080/api/enquiry/'+id)
          alert('Enquiry successfully deleted.')
        } catch (error) {
          alert(error)
        }
        this.getEnquiry()
      }

    

    render() {
        const { Enquiry } = this.state;
        return (
            <div className='videoList'>
            <h3>Enquiries</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone No</th>
                            <th>Email</th>
                            <th>Enquiry</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Enquiry && Enquiry.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{e.name}</td>
                                        <td>{e.phone}</td>
                                        <td>{e.email}</td>
                                        <td>{e.enquiry}</td>
                                        {/* <td>
                                            <Link to={"/edit/:" + video._id} className="btn btn-primary">Edit</Link>
                                        </td> */}
                                        <td>
                                            <button onClick={() => this.deleteEnquiry(e._id)} className='btn-danger' bsStyle="danger" >Delete</button>
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

export default AdminEnquiry;