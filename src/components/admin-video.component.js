import React, { Component } from 'react'
import axios from 'axios';
import {  Link } from "react-router-dom";
import "./admin-vid.css"

class AdminVid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    componentDidMount = () => {
        this.getVideo();
    }

    getVideo() {
        axios.get('http://localhost:8080/api/video')
            .then((response) => {
                console.log(response);
                this.setState({
                    videos: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    
        deleteVideo = async (id) => {
            try {
              const res = await axios.delete('http://localhost:8080/api/video/'+id)
              alert('Video successfully deleted.')
            } catch (error) {
              alert(error)
            }
            this.getVideo()
          }

    render() {
        const { videos } = this.state;
        return (
            <div className='videoList'>
            <h3>Add Lectures</h3>
            <button><Link to={"/add"} className="btn ">Add Video</Link></button>
            <h3>Lecture List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Video Title</th>
                            <th>Video Detail</th>
                            <th>Link</th>
                            <th>Actions</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            videos && videos.map((video, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{video.title}</td>
                                        <td>{video.detail}</td>
                                        <td>{video.vLink}</td>
                                        {/* <td>
                                            <Link to={"/edit/:" + video._id} className="btn btn-primary">Edit</Link>
                                        </td> */}
                                        <td>
                                            <button className='btn-danger' onClick={() => this.deleteVideo(video._id)} bsStyle="danger" >Delete</button>
                                        </td>
                                        <td>
                                            <a href={video.vLink}>Watch</a>
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

export default AdminVid;