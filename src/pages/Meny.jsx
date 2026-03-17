import React, {Component} from 'react';
import '../stilmall/stilmall.css';
import Header from '../components/Header';
import Footer from '../components/Footer'; 

class Meny extends Component{
  render(){
    return(
      <div>
    <Header></Header>

    <main>
        <section className="rubrik">
            <span>VÅR MENY</span>
        </section>

        <nav className="menyval">
            <ul>
                <li><a href="#" className="active">Pizza</a></li>
                <li><a href="#">Hot & Vitlök</a></li>
                <li><a href="#">Inbakad</a></li>
                <li><a href="#">Rullar</a></li>
                <li><a href="#">Kebab & Gyros</a></li>
                <li><a href="#">Sallad</a></li>
                <li><a href="#">Vegan</a></li>
                <li><a href="#">Hamburgare</a></li>
                <li><a href="#">Grill</a></li>
                <li><a href="#">Barnmeny</a></li>
            </ul>
        </nav>

        <section className="vald-meny">
            <span>Pizza</span>
        </section>

        <section className="meny-rätter">
            
            <table className="meny-tabell">
                <thead>
                    <tr>
                        <th>Rätt</th>
                        <th>Beskrivning</th>
                        <th>Pris</th>
                    </tr>
                </thead>
        
                <tbody>
                    <tr>
                        <td>Margherita</td>
                        <td>Tomatsås, ost</td>
                        <td>99 kr</td>
                    </tr>
        
                    <tr>
                        <td>Vesuvio</td>
                        <td>Tomatsås, ost, skinka</td>
                        <td>109 kr</td>
                    </tr>
        
                    <tr>
                        <td>Capricciosa</td>
                        <td>Tomatsås, ost, skinka, champinjoner</td>
                        <td>115 kr</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>

    <Footer></Footer>
      </div>
    );
  }
}

export default Meny;