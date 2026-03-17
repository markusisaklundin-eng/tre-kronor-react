import React from 'react';

const Footer = () => {
  return(
    <footer>
        <section className="kontakt">
            <h3>Kontakt:</h3>

            <div className="kontakt-info">
                <p>Telefon: <a href="tel:123456789">123 45 67 89</a></p>
                <p>Mail: <a href="mailto:pizza123@gmail.com">pizza123@gmail.com</a></p>
            </div>
        </section>
    </footer>
  );
};

export default Footer;