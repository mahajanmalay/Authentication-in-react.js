import React, { Component } from "react";
import "./board-admin.css"
import {  Link } from "react-router-dom";

import UserService from "../services/user.service";

export default class BoardAdmin extends Component {
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
                <h1 className='text-center fw-bold p-3 m-3'>Teacher Dashboard</h1>
                <div className="component">
                    <div className="dash-comp dash1">
                        <h3 className='text-center fw-bold'>Add/delete lectures</h3>
                        <div className='d-flex'>

                            <img src="https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-lecture-icon-png-image_350596.jpg" alt="" />
                            <p className='p-4'>Add video lectures <br /> Delete video lectures <button className='btnLog m-3'><Link to={"/adminVid"} className="nav-link">
                  Go
                </Link></button> </p>
                        </div>
                    </div>
                    
                    <div className="dash-comp dash2">
                        <h3 className='text-center fw-bold'>Add/Delete Notes</h3>
                        <div className='d-flex'>

                            <img src="https://png.pngtree.com/png-vector/20190804/ourlarge/pngtree-student-notes-note-education-flat-color-icon-vector-icon-png-image_1650322.jpg" alt="" />
                            <p className='p-4'>Add notes of lecture <br /> Delete notes of lecture <button className='btnLog m-3'><Link to={"/adminNotes"} className="nav-link">
                  Go
                </Link></button> </p>
                        </div>
                    </div>
                    <div className="dash-comp dash3">
                    <h3 className='text-center fw-bold'>Add/Delete Assignments</h3>
                        <div className='d-flex'>

                            <img src="https://png.pngtree.com/png-vector/20190214/ourlarge/pngtree-vector-notes-icon-png-image_509622.jpg" alt="" />
                            <p className='p-4'>Add Assignments <br /> Delete Assignments<br /> <button className='btnLog m-3'><Link to={"/adminAssignment"} className="nav-link">
                  Go
                </Link></button> </p>
                        </div>
                    </div>
                    <div className="dash-comp dash4">
                    <h3 className='text-center fw-bold'> Test</h3>
                        <div className='d-flex'>

                            <img src="https://png.pngtree.com/png-vector/20190729/ourmid/pngtree-laptop-player-screen-tutorial-video-blue-dotted-line-line-ic-png-image_1624506.jpg" alt="" />
                            <p className='p-4'>Edit Quiz <br /> Manage Test<br /> <button className='btnLog m-3'><Link to={"/adminTest"} className="nav-link">
                  Go
                </Link></button> </p>
                        </div>
                    </div>

                </div>
                <div className="manage-container">
                <div className="dash-comp dash5">
                    <h3 className='text-center fw-bold'>Manage Students</h3>
                        <div className='d-flex'>

                            <img src="https://cdn-icons-png.flaticon.com/512/2995/2995620.png" alt="" />
                            <p className='p-4'>Manage Students <br /> Delete Student Registration <button className='btnLog m-3'><Link to={"/adminManageUser"} className="nav-link">
                  Go
                </Link></button> </p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    );
  }
}