import {useTheme} from "../../context/ThemeContext.jsx";

export const ToggleThemeButton = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to dark' : 'Switch to light'}
        </button>
    )
}
