import React, { Component } from "react";
import "./home.css";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <>
        <div className="home-main">
          <img className="home-img" src="https://www.dambreach.org/sites/default/files/styles/banner/public/2021-08/training-courses-dambreach.jpg?itok=mLjTabdj" alt="" />
        </div>
        <div className="course-contaier">
          <h3 className="course-head">COURSE DETAILS<h4>---------------------------------------------------</h4></h3>
           
          <div className="course-details">
            <p>This is a Full stack web development crtification course using MERN stack which includes front end development, backend development, database processing and with a two full fledge projects. </p>
            <h3>What is MERN stack?</h3>
            <p>

              MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. <br />

              MongoDB — document database <br />
              Express(.js) — Node.js web framework <br />
              React(.js) — a client-side JavaScript framework <br />
              Node(.js) — the premier JavaScript web server <br />


              Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through.

            </p>

          </div>

          <div className="cards">
            <div className="card">
              <h3>Front-End</h3>
              <hr />
              <h5 className="text-center">React.js</h5>
              <hr />
              <p>React.js is the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.</p>
            </div>
            <div className="card">
              <h3>Back-End</h3>
              <hr />
              <h5 className="text-center">Express.js and Node.js</h5>
              <hr />
              <p>                    Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.jsExpress.js has powerful models for URL routing, and handling HTTP requests and responses.

              </p>
            </div>
            <div className="card">
              <h3>Database</h3>
              <hr />
              <h5 className="text-center">MongoDB database</h5>
              <hr />
              <p>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc.


              </p>
            </div>

          </div>

          <div className="techno-logo">
          <div className="course-ele-head">
          <h3>Technologies you will learn in this course...</h3>
        </div>
        <div className="course-element">
          <div className="course-ele-png1">
          </div>
          <div className="course-ele-png2">
          </div>
          <div className="course-ele-png3">
          </div>
          <div className="course-ele-png4">
          </div>
          <div className="course-ele-png5">
          </div>
          <div className="course-ele-png6">
          </div>
          <div className="course-ele-png7">
          </div>

        </div>
          </div>

        </div>
        <div className="footer">
            <div className="footer-logo">
                <h2>CkTechnologies</h2>
                <h5>Educating for better tomorrow</h5>
            </div>
            <div className="footer-icon">
            <ul>
                    <li className='githubIcon'><a href="https://github.com/mahajanmalay/" target="_malay"><FaGithub className='github'/></a></li>
                    <li className='linkedinIcon'><a href="https://www.linkedin.com/in/malay-mahajan-2889301a5/" target="_malay"><FaLinkedin className='linkedin'/></a></li>
                    <li className='youtubeIcon'><a href="https://www.youtube.com/@malaymahajan2492/" target="_malay"><FaYoutube className='youtube'/></a></li>
                </ul>
            </div>
            <div className="footer-address">
            <h4>Contact</h4>
            <hr />
            <h5>H.N.70, Shivaji Nagar</h5>
            <h5>Ambada ryt</h5>
            <h5>Burhanpur, M.P.</h5>
            <br />
            <h5>Mo.N. - 9131280079</h5>
            <h5>E-mail - malaymahajan.mm@gmail.com</h5>
            </div>
            <div className="footer-copyright">
                <p>Copyright @CkTechnologies.com</p>
            </div>
        </div>
      </>
    );
  }
}