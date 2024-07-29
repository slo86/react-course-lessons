import {createContext, useCallback, useContext, useState} from "react";

const AUTHENTICATED_USER = 'John Doe';

const AuthContext = createContext({
    authenticatedUser: null
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const logIn = useCallback(() => {
        setAuthenticatedUser(AUTHENTICATED_USER);
    }, [])

    const logOut = useCallback(() => {
        setAuthenticatedUser(null);
    }, [])

    return <AuthContext.Provider value={{ authenticatedUser, logIn, logOut }}>
        {children}
    </AuthContext.Provider>
}
