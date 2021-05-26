import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    navStyle = {
        color: "white"
    };

    render() {
        return (
            <nav>
                <h3>Logo</h3>
                <ul className={"nav-links"}>
                    <Link style={this.navStyle} to="/About">
                        <li>About</li>
                    </Link>
                    <Link style={this.navStyle} to="/Shop">
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;
