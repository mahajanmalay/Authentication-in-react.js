import React, { Component } from 'react'
import axios from 'axios';
import {  Link } from "react-router-dom";

class AdminTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Test: []
        }
    }

    componentDidMount = () => {
        this.getTest();
    }

    getTest() {
        axios.get('http://localhost:8080/api/gettest')
            .then((response) => {
                console.log(response);
                this.setState({
                    Test: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTest = async (id) => {
        try {
          const res = await axios.delete('http://localhost:8080/api/gettest/'+id)
          alert('Assignment successfully deleted.')
        } catch (error) {
          alert(error)
        }
        this.getTest()
      }
    

    render() {
        const { Test } = this.state;
        return (
            <div className='videoList'>
            <h3>Add Question</h3>
            <button><Link to={"/addTest"} className="btn ">Add Question</Link></button>
            <h3>Question List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Question</th>
                            <th>Answer</th>
                            <th>Actions</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Test && Test.map((test, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{test.question}</td>
                                        <td>{test.answer}</td>
                                        {/* <td>
                                            <Link to={"/edit/:" + video._id} className="btn btn-primary">Edit</Link>
                                        </td> */}
                                        <td>
                                            <button onClick={() => this.deleteTest(test._id)} className='btn-danger' bsStyle="danger" >Delete</button>
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

export default AdminTest;