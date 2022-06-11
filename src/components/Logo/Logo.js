import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
            <div className="logo">
                <img src="/photologo.png" alt="Sheipeg logo" />
            </div>
        </Link>
    )
}

export default Logo;