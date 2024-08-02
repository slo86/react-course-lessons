import {NavLink} from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            <h2>Home page</h2>
            <NavLink to={'/restaurants'}>Open restaurants</NavLink>
        </div>
    )
};
