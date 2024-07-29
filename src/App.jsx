import React from 'react'
import Layout from "./components/layout/Layout.jsx";
import PageProgressBar from "./components/progress-bar/PageProgressBar.jsx";
import {ThemeProvider} from "./context/ThemeContext.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import {Provider, useSelector} from 'react-redux';
import {store} from "./redux/store.js";
import {RestaurantsPage} from "./components/restaurant/RestaurantsPage.jsx";

function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider>
                    <PageProgressBar/>
                    <Layout>
                        <RestaurantsPage/>
                    </Layout>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    )
}

export default App
