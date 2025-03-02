import React, { useEffect, useState, useRef } from 'react';
import s from './MiniCategory.module.scss';
import Card from '../Card/Card';
import { gsap } from 'gsap';
import Header from '../Header/Header';

const MiniCategory = () => {
  const [products, setProducts] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (products.length && wrapperRef.current) {
      gsap.fromTo(
        wrapperRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [products]);

  return (
    <section className={s.category}>
      <div className="container">
        <div className={s.wrapper} ref={wrapperRef}>

          {products.slice(0, 4).map(card => (
            <Card 
              key={card.id} 
              id={card.id} 
              image={card.image} 
              name={card.name} 
              description={card.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniCategory;
