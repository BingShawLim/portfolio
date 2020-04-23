import React from 'react'
import {useSpring, animated} from 'react-spring';

function CardWords(props) {

    const style = useSpring({
        opacity: 1,
        from: {opacity: 0}
    });

    return (
        <animated.div className="my-card-info" style={style} >
            <p className="my-card-title">{props.title}</p>
            <p className="my-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target='-blank' rel="noopener noreferrer">VIEW</a>
        </animated.div>
    )
}

export default CardWords


