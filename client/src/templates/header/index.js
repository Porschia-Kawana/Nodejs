import React from "react";

import Navigation from "../../organisms/navigation";

import "./index.scss";

function Header() {
    return (
        <header className="header">
            <div className="header__flag header__flag--top" role="img" />
            <Navigation />
            <div className="header__flag header__flag--bottom" role="img" />
        </header>
    );
}

export default Header;
