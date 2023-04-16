import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
            {
                user ? <>
                <span>{user.email}</span>
                <button onClick={handleLogOut} className='btn btn-xs ml-5'>Sign Out</button>
                </> : <button className="btn btn-xs">Login</button>
            }
            </div>
        </div>
    );
};

export default Header;