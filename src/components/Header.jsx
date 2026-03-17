import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <header>
        <nav>
            <div className="logotyp">
                <Link to="/">
                    <img src="logotyp.png" alt="Tre kronors logotyp"/>
                </Link>
            </div>
            <ul className="meny">
                <li><Link to="/">Hem</Link></li>
                <li><Link to="/meny">Meny</Link></li>
                <li><Link to="/dagens_lunch">Dagens lunch</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
                <li><Link to="/om_oss">Om oss</Link></li>
                <li><Link to="/extra">Extra</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;