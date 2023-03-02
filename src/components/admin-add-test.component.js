import React, { Component } from 'react';
import axios from 'axios';
import "./admin-add-video.css"



class AddTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
        question: '',
        answer: '',
        }
    }

    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To add new employee when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { question, answer } = this.state;
        axios.post('http://localhost:8080/api/gettest', {
            question: question,
            answer: answer
     
        })
        .then((response) => {
        alert("Question added Succesfully")
        console.log(response);
        })
        .catch((error) => {
        console.log(error);
        });
        }

    render() {
        return (
            <div className="AddFormcontainer">
            <h4>Add Question</h4>
                <form  onSubmit={this.handleSubmit}>
                <label>
                        Question
                        <input
                            name="question"
                            type="text"
                            value={this.state.question}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Answer
                        <input
                            name="answer"
                            type="text"
                            value={this.state.answer}
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

export default AddTest;