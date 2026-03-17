import React from 'react';
import {Link} from 'react-router-dom';

const Extra_header = () => {
  return(
    <header>
        <nav className="extra-nav">
            <div className="logotyp">
                <Link to="/">
                    <img src="logotyp.png" alt="Tre kronors logotyp"/>
                </Link>
            </div>

            <button id="toggle-menu" aria-label = "Meny">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className="meny" id="extra-submeny" style={{display: 'none'}}>
                <li><Link to="/">Hem</Link></li>
                <li><Link to="meny.html">Meny</Link></li>
                <li><Link to="dagens_lunch.html">Dagens lunch</Link></li>
                <li><Link to="kontakt.html">Kontakt</Link></li>
                <li><Link to="om_oss.html">Om oss</Link></li>
                <li><Link to="extra.html" className="active">Extra</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Extra_header;