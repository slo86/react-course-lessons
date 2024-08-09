import {createContext, useCallback, useContext, useState} from "react";

// hardcoded user
const AUTHENTICATED_USER = {
    id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    name: "Sam",
};

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
