export const metadata = {
    title: 'Vite + React',
    description: 'Vite + React description',
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <head>
                <title>Vite + React</title>
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
