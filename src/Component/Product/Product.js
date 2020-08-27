import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  // console.log(props);
  const { img, name, category, instructor, price } = props.course;

  return (
    <div className="main-product">
      <div className="left-side">
        {/* <h3>{img}</h3> */}
        <img src={img} alt="" />
      </div>
      <div className="right-side">
        <h2>{name}</h2>

        <p>
          <small>Catagory : {category}</small>
        </p>

        <h5>Instructor : {instructor}</h5>

        <h3>Price : $ {price}</h3>
        <button
          className="main-btn"
          onClick={() => props.handleAddProduct(props.course)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          Enrol Now
        </button>
      </div>
    </div>
  );
};

export default Product;
