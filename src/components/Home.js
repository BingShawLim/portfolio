import React from 'react';

import Hero from './Hero'
import Carousel from './Carousel'

function Home(props) {
    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} words={props.words}/>
        <Carousel />
        </div>
    )
}

export default Home;