import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import Hero from './Hero';
import Content from './Content';

class Contact extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.state={
    //         name: '',
    //         email: '',
    //         message: '',
    //         disabled: false,
    //         mailSent: null,

    //     }
    // }

    // changeHandler = (event) => {
    //     console.log(event);

    //     const target = event.target;
    //     const value = target.type === ' checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name] : value
    //     })
    // }

    // submitHandler = (event) => {
    //     event.preventDefault();

    //     this.setState({
    //         disabled: true
    //     });
    // }



    render() {
        return (
            <div>
                <Hero title={this.props.title} />

                <Content>
                <div className="container">
                    <p className="title font-weight-bolder">My GitHub:</p>
                    <a href = "https://github.com/BingShawLim" className="links font-weight-bolder" target="_blank">BingShawLim</a>
                </div>
                <div className="container">
                    <p className="title font-weight-bolder">Email Me:</p>
                    <a href = "mailto: shaw.a.muvee@gmail.com" className="links font-weight-bolder">shaw.a.muvee@gmail.com</a>
                </div>
                <div className="container">
                 <Button href="https://drive.google.com/file/d/11sJcIWkGU32g83JKcoCoWek28V-dsvRL/view?usp=sharing" className="btn btn-dark" target="_blank">View My Resume</Button>
                </div>


                    {/* <Form onSubmit={this.submitHandler}>
                        <Form.Group>
                            <Form.Label htmlFor='full-name'> Full Name</Form.Label>
                            <Form.Control id='name' name='name' type='text' value={this.state.name} onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='email'> Full Name</Form.Label>
                            <Form.Control id='email' name='email' type='text' value={this.state.email} onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='message'> Full Name</Form.Label>
                            <Form.Control id='message' name='message' as='textarea' rows='3' value={this.state.message} onChange={this.changeHandler} />
                        </Form.Group>

                        <Button className="d-inline-block" variant='primary' type='submit' disabled={this.state.disabled}> 
                        Send
                        </Button>

                        {this.state.mailSent === true && <p className='d-inline success-msg'>Email Sent</p>}
                        {this.state.mailSent === false && <p className='d-inline err-msg'>Email Not Sent</p>}

                    </Form> */}
                </Content>
            </div>
        )
    }
}

export default Contact
