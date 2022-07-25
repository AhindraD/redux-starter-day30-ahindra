import React from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function Profile() {
    let { user } = useSelector(state => state.userInfo);
    console.log(user);
    return (
        <div className='info-cont'>
            <p>User: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Location: {user.location}</p>
        </div>
    )
}
