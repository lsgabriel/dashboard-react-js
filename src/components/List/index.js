import React from 'react';
import { Container } from './styles';

const List = (props) =>{
    return(
        <Container style={{backgroundColor:props.bg}}>
            <p>{props.icon} {props.text}</p>
        </Container>
    );
}

export default List;