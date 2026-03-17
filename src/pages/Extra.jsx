import React, {Component} from 'react';
import '../stilmall/stilmall.css'; 
import Extra_header from '../components/Extra_header';
import Footer from '../components/Footer';

class Extra extends Component{
  render(){
    return(
      <div>
        
    <Extra_header></Extra_header>

    <main>
        <section className="extra-layout">
            <section className="media">
                <h2>Video</h2>
    
                <video controls>
                    <source src="video.mp4" type="video/mp4"/>
                    Video ej tillgänglig
                </video>
            </section>
    
            <section className="formulär">
                <h2>Formulär</h2>
                <form action="mailto:malu0785@student.umu.se" method="post" enctype="text/plain">
                    <label htmlFor="namn">Namn:</label>
                    <input type="text" id="namn" name="namn" required/>
        
                    <label htmlFor="email">E-post:</label>
                    <input type="email" id="email" name="email" required/>
        
                    <label htmlFor="meddelande">Meddelande:</label>
                    <textarea id="meddelande" name="meddelande" rows="5" required></textarea>
        
                    <button type="submit">Skicka</button>
                </form>
            </section>
        </section>

        <section className="knapp">
            <button id="knapp">Show Message</button>
        </section>

        <section className="fade-sektion">
            <h2>Fade-effekten</h2>
            
            <div className="textblock">
                <div id="textblock-1" className="text-box">
                    <p>Ruta 1</p>
                    <p>20% Opacitet</p>
                </div>
                
                <div id="textblock-2" className="text-box">
                    <p>Ruta 2</p>
                    <p>60% Opacitet</p>
                </div>
            </div>
        
            <button id="start-fade">Klicka för att tona rutorna</button>
        </section>
    </main>

    <Footer></Footer>

      </div>
    );
  }
}

export default Extra;