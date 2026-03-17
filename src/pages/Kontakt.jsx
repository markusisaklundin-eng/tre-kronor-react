import React, {Component} from 'react';
import '../stilmall/stilmall.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

class Kontakt extends Component{
  render(){
    return(
      <div>
        
    <Header></Header>

    <main>
        <h1 className="kontakt-rubrik">Kontakt</h1>
        <section className="kontakt-layout">

            <section className="kontakt-information">

                <div className="kontakt-box">
                    <div className="ikon">&#128222;</div>
                    <h2>Telefon</h2>
                    <p><a href="tel:0701234567">070-123 45 67</a></p>
                </div>
        
                <div className="kontakt-box">
                    <div className="ikon">&#128205;</div>
                    <h2>Adress</h2>
                    <p>
                        Östra Järnvägsgatan 3A<br/>
                        911 32 Vännäs
                    </p>
                </div>
        
                <div className="kontakt-box">
                    <div className="ikon">&#128339;</div>
                    <h2>Öppettider</h2>
                    <p>
                        Mån-Tors: 10:00-20:00<br/>
                        Fre-Lör: 10:30-21:00<br/>
                        Sön: 12:00-20:00
                    </p>
                </div>
        
            </section>
        
            <section className="karta">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.9053460531363!2d19.7494673774203!3d63.905948777144644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c651054bc624b%3A0x93adb039124d9c17!2sTre%20Kronor%20Pizzeria!5e0!3m2!1ssv!2sse!4v1770973962042!5m2!1ssv!2sse" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>

                <a 
                    href="https://maps.app.goo.gl/eKmVFfqqi8CNrTzBA"
                    target="_blank"
                    className="karta-knapp">
                    Öppna i Google Maps
                </a>
            </section>

        </section>
        
    </main>

    <Footer></Footer>
      </div>
    );
  }
}

export default Kontakt;