import styles from './Header.module.css';
import {ToggleThemeButton} from "../buttons/ToggleThemeButton.jsx";
import {AuthButton} from "../buttons/AuthButton.jsx";
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <NavLink to={'/'}>Logo</NavLink>
            </div>
            <div className={styles.headerActions}>
                <ToggleThemeButton/>
                <div className="separator"></div>
                <AuthButton/>
            </div>
        </header>
    )
}
