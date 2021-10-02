import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
    const url = `/singleFriend/${ id }`;
    console.log(url)
    return (
        <div style={friendStyle}>
            <h2>I am : {name} {id}</h2>
            <h5>Call Me : {phone}</h5>
            <p>Visit : {website}</p>
            <small><p>I Live in: {address.city}</p></small>
            <Link to='/singleFriend/2/'>Visit</Link>
        </div>
    );
};

export default Friend;