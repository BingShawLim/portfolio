import React from 'react'
import {useSpring, animated} from 'react-spring';
import Badge from 'react-bootstrap/Badge'

function CardWords(props) {

    const style = useSpring({
        opacity: 1,
        from: {opacity: 0}
    });

    function showTools(arr) {
        return arr.map( el => { 
           return (<Badge style={{"marginRight": "3px"}} variant="light">{el}</Badge>)
        })
    }

    return (
        <animated.div className="my-card-info" style={style} >
            <p className="my-card-title">{props.title}</p>
            <Badge pill variant="dark">
            <a href={props.gitLink} target='-blank' rel="noopener noreferrer" style={{color:"white"}}>Go to Repository</a>
            </Badge>
            <p className="my-card-sub-title">{props.subTitle}</p>
            {showTools(props.tools)}<br />
            {/* <p className="my-card-tools">{props.tools}</p> */}
            <a href={props.link} target='-blank' rel="noopener noreferrer">View Project</a>

        </animated.div>
    )
}

export default CardWords


