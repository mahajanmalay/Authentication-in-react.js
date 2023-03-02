import React from 'react'
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <>
      <div className="home-main">
        <div className="home-image-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.dambreach.org/sites/default/files/styles/banner/public/2021-08/training-courses-dambreach.jpg?itok=mLjTabdj"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>CkTechnologies</h3>
                <p>We Educate for better future</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://www.hashtraining.com/img/slides/2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>CkTechnologies</h3>
                <p>We Educate for better future</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
        <div className="course-contaier">
          <h3>COURSE <h4>---------------------------------------------------</h4></h3>
          
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
          <div className="course-card">
            <div className="card1">
              <Card border="primary" style={{ width: '30rem' }}>
                <Card.Header>Frontend</Card.Header>
                <Card.Body>
                  <Card.Title className='card-title'>React.js</Card.Title>
                  <Card.Text>
                    React.js is the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="card2">
              <Card className='card1' border="primary" style={{ width: '30rem' }}>
                <Card.Header>Backend</Card.Header>
                <Card.Body>
                  <Card.Title>Ecpress.js and Node.js</Card.Title>
                  <Card.Text>
                    Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.jsExpress.js has powerful models for URL routing, and handling HTTP requests and responses.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="card3">
              <Card className='card1' border="primary" style={{ width: '30rem' }}>
                <Card.Header>Database</Card.Header>
                <Card.Body>
                  <Card.Title>MongoDB database</Card.Title>
                  <Card.Text>
                    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
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
        <button className="btnReg mb-3">
            Register For Course
          </button>
        
        <h3 className='text-center pt-3'>Our highring partners</h3>
        <div className="highring-card">
        <Card border="primary" style={{ width: '25rem' }}>
                <Card.Body>
                  <Card.Title className='card-title'>Amazon</Card.Title>
                  <Card.Text>
                    Amazon is our highring partner, till now 23 students are placed in Amazon
                  </Card.Text>
                </Card.Body>
              </Card>
        <Card border="primary" style={{ width: '25rem' }}>
                <Card.Body>
                  <Card.Title className='card-title'>Cognizant</Card.Title>
                  <Card.Text>
                    Cognizant is our highring partner, till now 20 students are placed in Cognizant
                  </Card.Text>
                </Card.Body>
              </Card>
        <Card border="primary" style={{ width: '25rem' }}>
                <Card.Body>
                  <Card.Title className='card-title'>TCS</Card.Title>
                  <Card.Text>
                    TCS is our highring partner, till now 18 students are placed in TCS
                  </Card.Text>
                </Card.Body>
              </Card>
        <Card border="primary" style={{ width: '25rem' }}>
                <Card.Body>
                  <Card.Title className='card-title'>TechMahindra</Card.Title>
                  <Card.Text>
                    TechMahindra is our highring partner, till now 16 students are placed in TechMahindra
                  </Card.Text>
                </Card.Body>
              </Card>
        <Card border="primary" style={{ width: '25rem' }}>
                <Card.Body>
                  <Card.Title className='card-title'>Infosys</Card.Title>
                  <Card.Text>
                    Infosys is our highring partner, till now 12 students are placed in Infosys
                  </Card.Text>
                </Card.Body>
              </Card>
        </div>
      </div>
    </>
  )
}

export default Home
