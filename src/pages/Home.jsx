import React, {Component} from 'react';
import '../stilmall/stilmall.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Karusell from '../components/Karusell';
import {Link} from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div>
        
    <Header></Header>

    <main>
    <Karusell></Karusell>
        

        <section className="cta-sektion">
            <div className="cta">
                <Link to="/meny" className="cta-box">
                    <h3>Se meny</h3>
                    <h3>Klicka här</h3>
                </Link>

                <a href="tel:123456789" className="cta-box">
                    <h3>Ring & beställ</h3>
                </a>

            </div>
        </section>
        
        <section className="information">
            <div className="info">
                <img src="bild1.png" alt="personal"/>
                <div className="text">
                    <h1>SERVICE MED OMTANKE</h1>
                    <p>Vi sätter alltid dig som gäst i fokus. Vårt mål är att ge dig ett trevligt
                        bemötande och snabb service, så att du alltid lämnar oss mätt och
                        nöjd.
                    </p>
                </div>
                
            </div>

            <div className="info">
                <img src="bild2.png" alt="pizza"/>
                <div className="text">
                    <h1>MAT LAGAD MED KÄRLEK</h1>
                    <p>Vi brinner för riktigt god mat. Därför använder vi alltid färska råvaror
                        och bakar våra pizzor med omsorg, så att varje tugga smakar lika bra.
                    </p>
                </div>
                
            </div>

            <div className="info">
                <img src="bild3.png" alt="pizzerian"/>
                <div className="text">
                    <h1>EN PLATS ATT TRIVAS PÅ</h1>
                    <p>Tre Kronor är en naturlig mötesplats i Vännäs. Här erbjuder vi en varm
                        och inbjudande miljö där alla är välkomna, oavsett om det är för en
                        snabb lunch eller middag med famlijen.
                    </p>
                </div>
                
            </div>
        </section>
    </main>

    <Footer></Footer>
      </div>
    );
  }
}

export default Home;