import React, {Component} from 'react';
import '../stilmall/stilmall.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

class Dagens_lunch extends Component{
  render(){
    return(
      <div>
        
    <Header></Header>

    <main>
        <section className="innehåll">
            <section className="rubrik">
                    <span>Dagens lunch</span>
                    <p className="info-text"><em>Salladsbuffé, dricka och kaffe ingår.</em></p>
            </section>
        
            <section className="meny-rätter">
                <table className="meny-tabell">
                    <thead>
                        <tr>
                            <th>Dag</th>
                            <th>Rätt</th>
                            <th>Beskrivning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Måndag</td>
                            <td>Margherita</td>
                            <td>Ost</td>
                        </tr>
                        <tr>
                            <td>Tisdag</td>
                            <td>Vesuvio</td>
                            <td>Ost, skinka</td>
                        </tr>
                        <tr>
                            <td>Onsdag</td>
                            <td>Hawaii</td>
                            <td>Ost, skinka, ananas</td>
                        </tr>
                        <tr>
                            <td>Torsdag</td>
                            <td>Skrovmål</td>
                            <td>2x 45g hamburgare, pommes</td>
                        </tr>
                        <tr>
                            <td>Fredag</td>
                            <td>Kebabrulle</td>
                            <td>Kebabkött</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="pris-info">
                <p><b>Alltid 99 kr!</b></p>
            </section>
        </section>
    </main>

    <Footer></Footer>
      </div>
    );
  }
}

export default Dagens_lunch;