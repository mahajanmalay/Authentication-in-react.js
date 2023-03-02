import React, { Component } from 'react'
import axios from 'axios';

import "./user-quiz.css"

class UserQuiz extends Component {
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



    render() {
        const { Test } = this.state;

        return (
            <>
                <div className='videoList'>
            <h3>Questions For the Test</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Test && Test.map((t, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{t.question}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
            </>
        );
    }


}

export default UserQuiz;