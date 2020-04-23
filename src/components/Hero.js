import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-3">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-3 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="font-weight-light">{props.subTitle}</h3> }
                        { props.words && <h3 className="lead font-weight-light">{props.words}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;
