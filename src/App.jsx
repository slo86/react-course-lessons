import {ThemeProvider} from "./context/ThemeContext.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import {RouterProvider} from "./components/router/index.jsx";
import {StoreProvider} from "./redux/StoreProvider.jsx";
import './style.css';

function App() {
    return (
        <StoreProvider>
            <AuthProvider>
                <ThemeProvider>
                    <RouterProvider/>
                </ThemeProvider>
            </AuthProvider>
        </StoreProvider>
    )
}

export default App
