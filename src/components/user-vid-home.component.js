import React, { Component} from 'react'
import axios from 'axios';
import "./user-vid-home.css";


class VidHome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],

        }
    }
    componentDidMount = () => {
        this.getvideos();
    }

    getvideos() {
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
    
    


    render() {
        const { videos } = this.state;
        return (
            <>
            
            
                <div className='videoList'>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Video title</th>
                                <th>Video Detail</th>
                                <th>Video Link</th>
                                <th></th>
                                <th></th>
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

            </>
        );
    }

}


export default VidHome;