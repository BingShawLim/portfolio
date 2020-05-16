import React from 'react';
import Container from 'react-bootstrap/Container';

import meimg from '../assets/images/1me.JPG';

import Hero from './Hero';
import Content from './Content';

function About(props) {
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
            <div className="container">
                <div>
                    <h3>Front-End Web Developer with Graphic Design & native level Chinese language skills.</h3>

                    <p>Having developed skills in HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux, JQuery, Ruby, Ruby on Rails, Firebase and PostgreSQL.</p>

                    <p>I am constantly learning about new tools and technics, currently enhancing my ReactJS knowledge by building different projects, and gaining backend database skills.</p>

                    <p>Known as a quick learner and good resource to ask the right questions, to get the right solution for the problems. Passionate about developing web applications and responsive websites.</p>

                    <p>A team-oriented player with the ability to grow myself and my team.  My desire is a position with a company that values my skill set and that looks for individuals who can think outside the box, for solutions to real-world problems, evolving and growing with a diverse team. </p>
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


                /* <p>My name is Bing Shaw Lim, I am a frontend web developer with experience in Javascript, NodeJS, ReactJS, Redux, JQuery and Ruby on Rails.</p>
                <p>I am always love about Technology stuffs like smartphone, Machine Learning, Applications and Video Games</p>
                <p>I'm constantly learning new skills, currently keep practicing with more React projects.</p>
                <p>My native language is Mandarin, able to understand Cantonese, can read and write/type Simplified and Traditional Chinese‎.</p>
                <p>I working on passion projects about Cooking & Graphic design.</p> */