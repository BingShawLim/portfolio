import React from 'react';
import Container from 'react-bootstrap/Container';

import meimg from '../assets/images/1me.jpg';

import Hero from './Hero';
import Content from './Content';

function About(props) {
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
            <div className="container">
                <div>
                <p>My name is Bing Shaw Lim, I am a frontend web developer with experience in Javascript, NodeJS, ReactJS, Redux, JQuery and Ruby on Rails.</p>
                <p>I am always love about Technology stuffs like smartphone, Machine Learning, Applications and Video Games</p>
                <p>I'm constantly learning new skills, currently keep practicing with more React projects.</p>
                <p>My native language is Mandarin, able to understand Cantonese, can read and write/type Simplified and Traditional Chinese‎.</p>
                {/* <p>I working on passion projects about Cooking & Graphic design.</p> */}
                </div>
                <div className="my-profile">
                <img className="my-profile-image" src={meimg} alt={meimg}/>
                </div>
            </div>
            </Content>
        </div>
    )
}

export default About;