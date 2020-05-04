import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Bing Shaw Lim',
      headerLink: [
        {title: 'Home', path:'/'},
        {title: 'About', path:'/about'},
        {title: 'Contact', path:'/contact'}
      ],
      home: {
        title: 'Learn, Create, Repeat.',
        subTitle: 'Beyond Yesterday',
        words: 'Check My Project Below'
      },
      about: {
        title: 'Hi, I am Bing.'
      },
      contact: {
        title: 'Let\'s Talk!'
      }
    }
  }
  render(){
    return (
      <BrowserRouter>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Bing Shaw Lim</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/portfolio">MyProject</Link>
              <Link className="nav-link" to="/about">AboutMe</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} words={this.state.home.words}/>} />
          <Route path="/portfolio" exact render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} words={this.state.home.words}/>} />
          <Route path="/about" exact render={()=> <About title={this.state.about.title} subTitle={this.state.about.subTitle} />} />
          <Route path="/contact" exact render={()=> <Contact title={this.state.contact.title} />} />

          <Footer />
        </Container>
      </BrowserRouter>
      );
    }
}

export default App;
