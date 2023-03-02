import React, { Component } from 'react';
import axios from 'axios';
import "./admin-add-video.css"



class AddVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        title: '',
        detail: '',
        vLink: ''
        }
    }

    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To add new employee when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { title, detail, vLink } = this.state;
        axios.post('http://localhost:8080/api/video', {
            title: title,
            detail: detail,
            vLink: vLink
        })
        .then((response) => {
        alert("Video added Succesfully")
        console.log(response);
        })
        .catch((error) => {
        console.log(error);
        });
        }

    render() {
        return (
            <div className="AddFormcontainer">
            <h4>Add Video</h4>
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
                        Detail
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
                        Video Link
                        <input
                            name="vLink"
                            type="text"
                            value={this.state.vLink}
                            onChange={this.handleChange}
                            className="form-control"
                        />
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

export default AddVideo;