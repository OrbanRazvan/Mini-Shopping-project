import React from 'react';
import Items from '../Items/Items';
import './Home.css';
import image1 from '../../Images/lewandowski.jpg';
import image2 from '../../Images/Reus.jpg';
import image3 from '../../Images/Ramos.jpg';
import image4 from '../../Images/Messi.jpg';
import image5 from '../../Images/Ronaldo.jpg';
import image6 from '../../Images/Bruyne.jpg';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__rows__items">
        <Items id="1" title="Bayern Munchen" category="T-Shirt" price="89.99" image={image1} />
        <Items id="2" title="Borussia Dortmund" category="T-Shirt" price="110" image={image2} />
        <Items id="3" title="Real Madrid" category="T-Shirt" price="99.99" image={image3} />
        <Items id="4" title="Barcelona" category="T-Shirt" price="123.99" image={image4} />
        <Items id="5" title="Juventus" category="T-Shirt" price="89.99" image={image5} />
        <Items id="6" title="Manchester City" category="T-Shirt" price="149.99" image={image6} />
      </div>
    </div>
  )
}


export default Home;