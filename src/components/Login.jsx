import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { login, logout } from '../slices/userSlice';

const newUser = {
    name: 'nextPerson',
    email: 'idontknow@mail.com',
    location: 'nope',
}

export default function Login() {
    const dispatch = useDispatch();
    return (
        <div className='log-cont'>
            <button className="login" onClick={() => {
                dispatch(login(newUser));
            }}>log in</button>
            <button className="logout" onClick={() => {
                dispatch(logout());
            }}>log out</button>
        </div>
    )
}
