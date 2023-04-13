import React from 'react';
import './chat.css';
import background from '../images/interface.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Chat = () => {
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
        backgroundPosition: "60px",  
           
      }}
    >
    <Container fluid="md">
    <Row>
        <Col md={4} className='texte'>
        <h4>CHAT ABOUT SYMPTOMS</h4>
        </Col>
    <Col md={8}>
        
     <div id='chat-container'>   
     <div className="chat-title">
        <span>
            MEDBOT  
            {/*<input type="button" className="savebutton" value="Save Chat"></input>*/}
        </span>
        </div>
       <div id="chat-message-list">
            <div className="message-row other-message">
                <div className="message-content">
                    <div className="message-text">
                        Since last three days.
                    </div>
                    <div className="message-time">Dec 13</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Well we need to work out sometime soon where
                        we really want to record our video course.
                    </div>
                    <div className="message-time">Dec 13</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <div className="message-text">
                        Noted! How many days have you been having this headache.
                    </div>
                    <div className="message-time">Dec 13</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        I don't have fever but the headaxhe is severe. The pain is on the sides of my forehead. 
                    </div>
                    <div className="message-time">Dec 13</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <div className="message-text">
                        Okay! Do you have a fever? Also pinpoint the area where you feel pain.
                    </div>
                    <div className="message-time">Dec 13</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        I have been suffering from a headache and cold for two days.
                    </div>
                    <div className="message-time">Dec 13</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <div className="message-text">
                        Hello! I'm MedBot. How can I help you?
                    </div>
                    <div className="message-time">Dec 13</div>
                </div>
            </div>
        </div>
        <div id="chat-form">
            <input type="text" placeholder="Type a message" />
        </div>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
  );
};

export default Chat;