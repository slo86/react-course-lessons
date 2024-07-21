import Header from "../header/Header.jsx";
import Footer from "../../footer/Footer.jsx";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
    return <div className={styles['layout']}>
        <Header/>
        <main className={styles['content']}>
            {children}
        </main>
        <Footer/>
    </div>
}
