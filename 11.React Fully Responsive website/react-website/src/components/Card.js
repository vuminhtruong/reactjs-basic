import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardItem from "./CardItem";

function Card() {
    return (
        <div className="cards">
          <h1>Check out these EPIC Destinations!</h1>
          <div className="cards-container">
          <Container>
            <Row xs={3}>
              <Col>
                <CardItem 
                  src='images/2.jpg'
                  title="Adventure"
                  text="Explore the hidden waterfall deep inside the Amazon Jungle"
                />
              </Col>
              <Col>
                <CardItem 
                  src="images/8.jpg"
                  title="Luxury"
                  text="Explore the hidden waterfall deep inside the Amazon Jungle"
                /> 
              </Col>
              <Col>
                <CardItem 
                  src="images/5.jpg"
                  title="Nature"
                  text="Explore the hidden waterfall deep inside the Amazon Jungle"
                /> 
              </Col>
            </Row>
            <Row xs={3} >
              <Col>
                <CardItem 
                  src="images/3.jpg"
                  title="Relax"
                  text="Explore the hidden waterfall deep inside the Amazon Jungle"
                /> 
              </Col>
              <Col>
                <CardItem 
                  src="images/4.jpg"
                  title="Dreamy"
                  text="Explore the hidden waterfall deep inside the Amazon Jungle"
                /> 
              </Col>
              <Col>
                <CardItem 
                  src="images/6.jpg"
                  title="Mystery"
                  text="Explore the hidden waterfall deep inside the Amazon Jungle"
                /> 
              </Col>
            </Row>
          </Container>
          </div>
        </div>
    );
}

export default Card;