import styles from './Header.module.css';
import {ToggleThemeButton} from "../buttons/ToggleThemeButton.jsx";
import {AuthButton} from "../buttons/AuthButton.jsx";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
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
