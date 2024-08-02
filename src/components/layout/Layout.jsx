import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import styles from "./Layout.module.css";
import {useTheme} from "../../context/ThemeContext.jsx";
import classNames from "classnames";
import PageProgressBar from "../progress-bar/PageProgressBar.jsx";
import React from "react";
import {Outlet} from "react-router-dom";
import {Cart} from "../cart/Cart.jsx";

export default function Layout() {
    const {theme} = useTheme();

    return (
        <div
            className={classNames(styles.layout, [theme === 'light'
                ? styles.layoutThemeLight
                : styles.layoutThemeDark])}
        >
            <PageProgressBar/>
            <Cart/>
            <Header/>
            <main className={styles.content}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
