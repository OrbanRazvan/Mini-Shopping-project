import React from 'react';
import Items from '../Items/Items';
import './Boots.css';
import image1_2 from '../../Images/boots_Bayern.jpg';
import image2_2 from '../../Images/boots_Dortmund.jpg';
import image3_2 from '../../Images/boots_Real.jpg';
import image4_2 from '../../Images/boots_Barcelona.jpg';
import image5_2 from '../../Images/boots_Juventus.jpg';
import image6_2 from '../../Images/boots_City.jpg';

const Boots = () => {
  return (
    <div className="Boots">
      <div className="Boots__rows__items">
        <Items id="7" title="Bayern Munchen" category="Football boots" price="64.99" image={image1_2} />
        <Items id="8" title="Borussia Dortmund" category="Football boots" price="56.99" image={image2_2} />
        <Items id="9" title="Real Madrid" category="Football boots" price="51.49" image={image3_2} />
        <Items id="10" title="Barcelona" category="Football boots" price="61.99" image={image4_2} />
        <Items id="11" title="Juventus" category="Football boots" price="57.99" image={image5_2} />
        <Items id="12" title="Manchester City" category="Football boots" price="72.99" image={image6_2} />
      </div>
    </div>
  )
}

export default Boots;