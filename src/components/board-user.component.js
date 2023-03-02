import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserService from "../services/user.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <>
        <div className="tDash-main">
          <h1 className='text-center fw-bold p-3 m-3'>Student Dashboard</h1>
          <div className="component">
            <div className="dash-comp dash1">
              <h3 className='text-center fw-bold'>View lectures</h3>
              <div className='d-flex'>

                <img src="https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-lecture-icon-png-image_350596.jpg" alt="" />
                <p className='p-4'>Check video lectures <br /> Watch video lectures <button className='btnLog m-3'><Link to={"/videoHome"} className="nav-link">
                  Go
                </Link></button> </p>
              </div>
            </div>

            <div className="dash-comp dash2">
              <h3 className='text-center fw-bold'>view Notes</h3>
              <div className='d-flex'>

                <img src="https://png.pngtree.com/png-vector/20190804/ourlarge/pngtree-student-notes-note-education-flat-color-icon-vector-icon-png-image_1650322.jpg" alt="" />
                <p className='p-4'>View notes of lecture <br /> Read notes of lecture <button className='btnLog m-3'><Link to={"/userNotes"} className="nav-link">
                  Go
                </Link></button> </p>
              </div>
            </div>
            <div className="dash-comp dash3">
              <h3 className='text-center fw-bold'>view Assignments</h3>
              <div className='d-flex'>

                <img src="https://png.pngtree.com/png-vector/20190214/ourlarge/pngtree-vector-notes-icon-png-image_509622.jpg" alt="" />
                <p className='p-4'>View Assignments <br /> Read Assignments<br /> <button className='btnLog m-3'><Link to={"/userAssignment"} className="nav-link">
                  Go
                </Link></button> </p>
              </div>
            </div>
            <div className="dash-comp dash4">
              <h3 className='text-center fw-bold'> Test</h3>
              <div className='d-flex'>

                <img src="https://png.pngtree.com/png-vector/20190729/ourmid/pngtree-laptop-player-screen-tutorial-video-blue-dotted-line-line-ic-png-image_1624506.jpg" alt="" />
                <p className='p-4'>Start Quiz <br /> Start Test<br /> <button className='btnLog m-3'><Link to={"/userQuiz"} className="nav-link">
                  Go
                </Link></button> </p>
              </div>
            </div>
            
          </div>
<br />
<br /><br />
        </div>
      </>
    );
  }
}