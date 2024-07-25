import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import styles from "./Layout.module.css";
import {useTheme} from "../../context/ThemeContext.jsx";
import classNames from "classnames";

export default function Layout({children}) {
    const {theme} = useTheme();

    return (
        <div
            className={classNames(styles.layout, [theme === 'light'
                ? styles.layoutThemeLight
                : styles.layoutThemeDark])}
        >
            <Header/>
            <main className={styles.content}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
