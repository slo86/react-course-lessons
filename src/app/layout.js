export const metadata = {
    title: 'Next + React',
    description: 'Next + React description',
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
