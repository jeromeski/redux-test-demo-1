import React from 'react';
import image from '../../assets/images/1.png';

function ShopLayout(props) {
  console.log(props);
  return (
    <div>
      {/* This points to the public folder */}
      <img src={'assets/images/1.png'} />'
      {/* This points to the assets folder inside src' */}
      <img src={image} />
      <img src={`${process.env.PUBLIC_URL}/assets/images/1.png`} />'
    </div>
  );
}

export default ShopLayout;
