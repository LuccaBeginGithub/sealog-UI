import React, {createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState();

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return(
        <AuthContext.Provider value={{userInfo,setUserInfo,isLoggedIn,setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () =>{
    return useContext(AuthContext);
}