import Navbar from "../Navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
        </>
    )
}

export default Layout