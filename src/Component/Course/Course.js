import React from 'react';
import fakeData from '../../fakeData/courseData';
import { useState } from 'react';
import './Course.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Course = () => {
  const first10 = fakeData.slice(0, 16);
  const [course, setCourse] = useState(first10);
  const [cart, setCart] = useState([]);
  // console.log(course);
  // console.log(cart);
  const handleAddProduct = (course) => {
    console.log('click', course);

    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className="course-container">
      <div className="product-container">
        {course.map((cd) => (
          <Product course={cd} handleAddProduct={handleAddProduct}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Course;
