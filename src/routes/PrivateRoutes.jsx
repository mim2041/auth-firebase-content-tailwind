import React, { Children, useContext } from 'react';
import { AuthContext } from '../component/Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
    
};

export default PrivateRoutes;