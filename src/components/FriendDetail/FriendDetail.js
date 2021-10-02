import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const x = useParams();
    console.log(x, "Hello");
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/1`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))

    }, [])
    return (
        <div>
            <h3>Detail Coming Soon</h3>

            <h1>{friend.name}</h1>
            <h1>{friend.phone}</h1>
            <h1>{friend.website}</h1>
            <h1>Work At: {friend.company?.name}</h1>
        </div>
    );
};

export default FriendDetail;