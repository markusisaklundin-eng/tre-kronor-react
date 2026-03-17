import React, {Component} from 'react';
import Slide from './Slide'; 

class Karusell extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0 
    };

    this.slides = [
      { 
        title: "Dagens lunch", 
        subtitle: "Kl: 10-14 vardagar", 
        price: "Bara 99kr", 
        linkText: "Vad som ingår!", 
        type: "dagens_lunch", 
        targetPath: "/dagens_lunch"
      },
      { 
        title: "Veckans erbjudande", 
        subtitle: "Pizza med ostfyllda kanter", 
        price: "Bara 120kr", 
        linkText: "Se i menyn!", 
        type: "erbjudanden",
        targetPath: "/meny"
      },
      { 
        title: "OBS! Vid allergi", 
        subtitle: "Fråga personalen", 
        linkText: "Kontakta oss", 
        type: "allergi",
        targetPath: "/kontakt"
      }
    ];
  }

  nextSlide = () => {
    this.setState({
      currentIndex: (this.state.currentIndex + 1) % this.slides.length
    });
  };

  prevSlide = () => {
    this.setState({
      currentIndex: (this.state.currentIndex - 1 + this.slides.length) % this.slides.length
    });
  };

  render() {
    return (
      <div className="karusell">
        <Slide data={this.slides[this.state.currentIndex]} />

        <button className="prev" onClick={this.prevSlide}>&#10094;</button>
        <button className="next" onClick={this.nextSlide}>&#10095;</button>
      </div>
    );
  }
}

export default Karusell;