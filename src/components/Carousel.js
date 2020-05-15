import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

import Card from './Card'
import picpicland from '../assets/images/picpicland.JPG'
import memoritor from '../assets/images/memoritor.JPG'
import todomvc from '../assets/images/todomvc.JPG'
import mello from '../assets/images/mello.JPG'
import nomster from '../assets/images/nomster.JPG'
import kidultv from '../assets/images/kidultv.JPG'
import reactnote from '../assets/images/reactnote.JPG'
import catchotday from '../assets/images/catchotday.JPG'
import whiteboardhook from '../assets/images/whiteboard-hooks.jpeg'


class Carousel extends Component {
    constructor(props){
        super(props)
        this.state= {
            projects: [
                {
                    id: 0,
                    title:'PicPicLand',
                    subTitle:'A Ruby on Rails instagram look alike project.',
                    imgSrc: picpicland,
                    gitLink: 'https://github.com/BingShawLim/picpicland',
                    link:'https://picpicland-01.herokuapp.com',
                    selected: false
                },
                {
                    id: 1,
                    title:'The Memoritor',
                    subTitle:'Flip Card matching memory game made with pure JS,longterm learning project.',
                    imgSrc: memoritor,
                    gitLink: 'https://github.com/BingShawLim/thememoritor',
                    link:'https://the-memoritor-bingshaw.herokuapp.com',
                    selected: false
                },
                {
                    id: 2,
                    title:'White-Board!',
                    subTitle:'simple Painting app creact with React, using Hooks.',
                    imgSrc: whiteboardhook,
                    gitLink: 'https://github.com/BingShawLim/white-board-hooks',
                    link:'https://white-board-hooks.herokuapp.com',
                    selected: false
                },
                {
                    id: 3,
                    title:'Mello',
                    subTitle:'A Trello clone made with JavaScript and jQuery',
                    imgSrc: mello,
                    gitLink: 'https://github.com/BingShawLim/mello-rails',
                    link:'https://mello-rails-bshaw.herokuapp.com/boards',
                    selected: false
                },
                {
                    id: 4,
                    title:'Nomster',
                    subTitle:'A Yelp clone made with Ruby on Rails.',
                    imgSrc: nomster,
                    gitLink: 'https://github.com/BingShawLim/nomster.1',
                    link:'https://bing-nomster-v2.herokuapp.com',
                    selected: false
                },
                {
                    id: 5,
                    title:'Kidultv',
                    subTitle:'A video Learning Platform made with Ruby on Rails and Javascript',
                    imgSrc: kidultv,
                    gitLink: 'https://github.com/BingShawLim/kidultv',
                    link:'https://kidultv-1.herokuapp.com',
                    selected: false
                },
                {
                    id: 6,
                    title:'React Note App',
                    subTitle:'A note app made with React',
                    imgSrc: reactnote,
                    gitLink: 'https://github.com/BingShawLim/react-note-re',
                    link:'https://react-note-re.herokuapp.com',
                    selected: false
                },
                {
                    id: 7,
                    title:'Catch of the Day',
                    subTitle:'A fish market platform built with React.',
                    imgSrc: catchotday,
                    gitLink: 'https://github.com/BingShawLim/catchoftheday1',
                    link:'https://catch-of-the-day-react-virid.now.sh',
                    selected: false
                },
                {
                    id: 8,
                    title:'todo-mvc practice',
                    subTitle:'Javascript user interface practice project.',
                    imgSrc: todomvc,
                    gitLink: 'https://github.com/BingShawLim/todo1-redo',
                    link:'https://todo-redo-bingshaw.herokuapp.com',
                    selected: false
                },
            ]
        }
    }

    cardClickHandler = (id, card) => {
        let projects = [...this.state.projects];

        projects[id].selected = projects[id].selected ? false: true;

        projects.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            projects
        });
    }

    makeCards = (items) => {
        return items.map(item => {
            return( <Card item={item} click={e => this.cardClickHandler(item.id, e)} key={item.id}/>)
        });
    }
    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                {this.makeCards(this.state.projects)}
                </Row>
            </Container>
        )
    }
}

export default Carousel
