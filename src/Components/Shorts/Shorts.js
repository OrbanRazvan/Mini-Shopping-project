import React from 'react';
import Items from '../Items/Items';
import './Shorts.css';
import image1_1 from '../../Images/shorts_Bayern.jpg';
import image2_1 from '../../Images/shorts_dortmund.jpg';
import image3_1 from '../../Images/shorts_real.jpg';
import image4_1 from '../../Images/shorts_barcelona.jpg';
import image5_1 from '../../Images/shorts_juventus.jpg';
import image6_1 from '../../Images/shorts_City.jpg';

const Shorts = () => {
  return (
    <div className="Shorts">
      <div className="Shorts__rows__items">
        <Items id="7" title="Bayern Munchen" category="Shorts" price="43.99" image={image1_1} />
        <Items id="8" title="Borussia Dortmund" category="Shorts" price="42.49" image={image2_1} />
        <Items id="9" title="Real Madrid" category="Shorts" price="39.99" image={image3_1} />
        <Items id="10" title="Barcelona" category="Shorts" price="56.99" image={image4_1} />
        <Items id="11" title="Juventus" category="Shorts" price="36.99" image={image5_1} />
        <Items id="12" title="Manchester City" category="Shorts" price="59.99" image={image6_1} />
      </div>
    </div>
  )
}

export default Shorts;
