import {useEffect, useState} from "react";
import {pageScrollPercentage} from "../../utils.js";
import { throttle } from 'throttle-debounce';
import styles from "./ProgressBar.module.css";

export default function PageProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScrollAndResize = throttle(100,() => {
            setProgress(pageScrollPercentage());
        });

        window.addEventListener('scroll', handleScrollAndResize);
        window.addEventListener('resize', handleScrollAndResize);

        return () => {
            window.removeEventListener('scroll', handleScrollAndResize);
            window.removeEventListener('resize', handleScrollAndResize);
        }
    }, []);

    return (
        <div className={styles['page-progress-bar']} style={{width: `${progress}%`}}></div>
    )
}
