import React, {Component} from 'react';
import '../stilmall/stilmall.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

class Om_oss extends Component{
  render(){
    return(
      <div>
        
    <Header></Header>

    <main>
        <section className="om-oss-layout">
            
                <section className="om-oss-text">
                    <h1>Om oss</h1>
                    <p>
                        Välkommen till pizzeria Tre Kronor, en älskad samlingsplats i hjärtat av
                        Vännäs! Pizzeria Tre Kronor har varit en viktig del av samhället i många år.
                        Sedan 2019 har vi tagit över ledningen och fortsätter att servera utsökta
                        pizzor, tillagade med omsorg och dedikation.<br/><br/>
    
                        Vår passion är ett erbjuda våra gäster delikata pizzor, varsamt tillagade med
                        de bästa ingridienserna och en stor portion kärlek. Vi gör alltid vårt yttersta
                        för att ge våra gäster en minnesvärd upplevelse. Vi ser fram emot att
                        välkomna dig till pizzeria Tre Kronor.
                    </p>
                </section>
            
                <section className="om-oss-bild">
                    <img src="bild1.png" alt="Personal"/>
                </section>

        </section>
    </main>

    <Footer></Footer>

      </div>
    );
  }
}

export default Om_oss;