import {useEffect, useState} from "react";
import {pageScrollPercentage} from "../utils.js";

export default function PageProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function handleScrollAndResize() {
            setProgress(pageScrollPercentage());
        }

        window.addEventListener('scroll', handleScrollAndResize);
        window.addEventListener('resize', handleScrollAndResize);

        return () => {
            window.removeEventListener('scroll', handleScrollAndResize);
            window.removeEventListener('resize', handleScrollAndResize);
        }
    }, []);

    return (
        <div className='page-progress-bar' style={{width: `${progress}%`}}></div>
    )
}
