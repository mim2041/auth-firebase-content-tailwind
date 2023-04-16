import React, { createContext, useState } from 'react';
import App from '../../App';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(App)

const AuthProviders = ({children}) => {
    
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user, 
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;