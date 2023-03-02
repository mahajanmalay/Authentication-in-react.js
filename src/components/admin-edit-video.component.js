import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

class EditVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            detail: '',
            vLink: ''
        }
    }

    componentDidMount = () => {
        this.getVideoById();
    }

    // To get employee based on ID
    getVideoById() {
        axios.get('http://localhost:8080/video/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    title: response.data.title,
                    detail: response.data.detail,
                    vLink: response.data.vLink
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To update the record on submit
    handleSubmit = (event) => {
        event.preventDefault();
        const { title, detail, vLink } = this.state;
        axios.post('http://localhost:8080/video/' + this.props.match.params.id, {
            title: title,
            detail: detail,
            vLink: vLink
        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="container">
                <form style={customStyle} onSubmit={this.handleSubmit}>
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

export default EditVideo;