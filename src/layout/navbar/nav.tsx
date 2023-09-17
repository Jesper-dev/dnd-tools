import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./nav.less";

export const Nav = () => {
    const [openNav, setOpenNav] = useState(false);
    const renderLinks = () => {
        if (!openNav) return <></>;
        return (
            <ul>
                <li>
                    <Link to={""}>Init tracker</Link>
                </li>
                <li>
                    <Link to={"damage"}>Damage Tracker</Link>
                </li>
            </ul>
        );
    };
    return (
        <nav>
            <div className="container">
                {renderLinks()}
                <div className="toggle_icon_container">
                    <FontAwesomeIcon
                        onClick={() => setOpenNav(!openNav)}
                        icon={faBars}
                        className="toggle_icon"
                    />
                </div>
            </div>
        </nav>
    );
};
