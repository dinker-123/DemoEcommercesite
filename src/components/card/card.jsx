import React, { useState, useEffect } from 'react';
import styles from './card.module.css'; 
import { ItemList } from '../items/items';
import { useValue } from '../../itemContext';

export default function Card() {
 const [data, setData] = useState(null);
 const { handleBuy, cart } = useValue();

 useEffect(() => {
  async function fetchData() {
   const data = await ItemList();
   setData(data);
  }
  fetchData();
 }, []);
  
 if (!data) {
  return <div>Loading...</div>;
 }

 return (
    <div>
      {data.map((item) => {
        const isInCart = cart.some(cartItem => cartItem.id === item.id);
        return (
          <div className={styles.card} key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <h4>${item.price}</h4>
            <button
              className={isInCart ? styles.remove : styles.buy}
              onClick={() => handleBuy(item)}
            >
              {isInCart ? 'Remove' : 'Buy'}
            </button>
          </div>
        );
      })}
    </div>
  );
}