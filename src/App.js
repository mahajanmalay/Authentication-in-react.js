import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthService from "./services/auth.service";
import AuthVerify from "./common/auth-verify";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import VidHome from "./components/user-vid-home.component";
import AdminVid from "./components/admin-video.component";
import EditVideo from "./components/admin-edit-video.component";
import AddVideo from "./components/admin-add-video.component";
import AddNotes from "./components/admin-notes.component";
import AdminNotes from "./components/admin-notes-home";
import AdminAssignment from "./components/admin-assignment.componet";
import AddAssignment from "./components/admin-add-assignment.component";
import UserNotes from "./components/user-notes.component";
import UserAssignment from "./components/user-assignment.component";
import UserQuiz from "./components/user-quiz.component";
import AdminTest from "./components/admin-test-home.component";
import AddTest from "./components/admin-add-test.component";
import AdminManageUser from "./components/admin-manage-user.component";
import UserEnquire from "./components/user-enquire.component";
import AdminEnquiry from "./components/admin-enquiry.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            CkTechnologies
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            

            {!currentUser && (
              <li className="nav-item">
                <Link to={"/userEnquire"} className="nav-link">
                  Enquire
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/adminEnquiry"} className="nav-link">
                  Enquiries
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="home-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/videoHome" element={<VidHome />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/adminVid" element={<AdminVid />} />
            <Route path="/edit/:id" element={<EditVideo />} />
            <Route path="/add" element={<AddVideo />} />
            <Route path="/addNote" element={<AddNotes />} />
            <Route path="/addAssignment" element={<AddAssignment />} />
            <Route path="/addTest" element={<AddTest />} />
            <Route path="/adminNotes" element={<AdminNotes />} />
            <Route path="/userNotes" element={<UserNotes />} />
            <Route path="/adminAssignment" element={<AdminAssignment />} />
            <Route path="/adminTest" element={<AdminTest />} />
            <Route path="/adminManageUser" element={<AdminManageUser />} />
            <Route path="/userAssignment" element={<UserAssignment />} />
            <Route path="/userQuiz" element={<UserQuiz />} />
            <Route path="/userEnquire" element={<UserEnquire />} />
            <Route path="/adminEnquiry" element={<AdminEnquiry />} />
          </Routes>
        </div>
        <AuthVerify logOut={this.logOut}/>
      </div>
    );
  }
}

export default App;