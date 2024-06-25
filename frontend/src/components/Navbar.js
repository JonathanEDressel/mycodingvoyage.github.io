import { Link } from "react-router-dom"

const Navbar = function() {
    return (
        <header>
            <nav id="pg-header" className="navbar navbar-dark">
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/About">
                    <span>About Me</span>
                </Link>
                <Link to="/Portfolio">
                    <span>Portfolio</span>
                </Link>
                <Link to="/Contact">
                    <span>Contact</span>
                </Link>
            </nav>
            {/* <div className="container">
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/About">
                    <span>About Me</span>
                </Link>
                <Link to="/Portfolio">
                    <span>Portfolio</span>
                </Link>
                <Link to="/Contact">
                    <span>Contact</span>
                </Link>
            </div> */}
        </header>
    )
}
export default Navbar;