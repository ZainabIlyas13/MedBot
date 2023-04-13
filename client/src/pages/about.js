import React from 'react';
import background from '../images/about.jpg'
import './about.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: "#A13D77",
        backgroundImage: `url(${background})`,
        backgroundSize:"30%",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "left",
      }}
    >
       <Container fluid="md">
      <Row className='rowheight'>
        <Col md={4} className='texte'>
        <h3 >ABOUT US</h3>
        </Col>
        <Col md={8}>
        <p className='textbox'>Helping is our thing at MedBot. It's not for glory or gain. We help because we care.
        So, through MedBot we can help a world's worth of people regain their own health.<br/><br/>
        At MedBot we are united by our commitment in guiding people to right care. And we believe it takes a workforce that nurtures difference to get the job done.<br/><br/>
        We aim to provide our users with a timely diagnosis so that they can treat themselves at home.
        </p> 
        </Col>
      </Row>
     
       </Container>
    </div>
  );
};

export default About;