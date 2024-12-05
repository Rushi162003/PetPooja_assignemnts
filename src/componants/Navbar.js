
import { Link } from "react-router-dom";
import "../style/navbar.css"
function Navbar() {
    return (
        <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/form">Form</Link>
            <Link className="link" to="/datePicker">Form</Link>
        </nav>
    );
}

export default Navbar