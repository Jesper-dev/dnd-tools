import { Link } from "react-router-dom";
import "./nav.less";

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={""}>Init tracker</Link>
                </li>
                <li>
                    <Link to={"damage"}>Damage Tracker</Link>
                </li>
            </ul>
        </nav>
    );
};
