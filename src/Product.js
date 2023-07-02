
import React from 'react';

const ProductRow = ({ image, name, description, price }) => {
  return (
    <div className="flex-parent-element" style={{ borderRadius: '100px' }}>
        <img  className="flex-child-element" src={image} alt="Sample" style={{maxHeight:"30vh"}}/>
        <h4  className="flex-child-element">{name}</h4>
        <p className="flex-child-element" style={{  paddingBottom: "10vh"}}>{description} </p>
    </div>
  );
}

export default ProductRow;