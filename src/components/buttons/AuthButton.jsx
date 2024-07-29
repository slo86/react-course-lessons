import {useAuth} from "../../context/AuthContext.jsx";

export const AuthButton = () => {
    const {authenticatedUser, logIn, logOut} = useAuth();

    return (
        authenticatedUser ? (
            <>
                <span>{authenticatedUser}</span>
                <button onClick={logOut}>Log out</button>
            </>

        ) : (
            <button onClick={logIn}>Log in</button>
        )
    )
}
