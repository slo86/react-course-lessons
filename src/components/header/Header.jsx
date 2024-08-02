import styles from './Header.module.css';
import {ToggleThemeButton} from "../buttons/ToggleThemeButton.jsx";
import {AuthButton} from "../buttons/AuthButton.jsx";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <div className={styles.headerContent} onClick={() => navigate('/')}>
                Header
            </div>
            <div className={styles.headerActions}>
                <ToggleThemeButton/>
                <div className="separator"></div>
                <AuthButton/>
            </div>
        </header>
    )
}
