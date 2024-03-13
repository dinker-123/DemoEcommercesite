import React from "react";
import styles from "./cardModel.module.css";
import { useValue } from "../../itemContext";


function CartModal() {
  const {cart,close,value,total} = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={close}>Close</div>
      <div className={styles.clearButton}>Clear</div>
      <div className={styles.itemContainer}>
      {cart.map((data)=>{
            return(
              
                <>
                <div className={styles.cartCard} key={data.id}>
                  <img src={data.image} alt={data.title} />
                  <p>{data.title}</p>
                  <h4>$ {data.price}</h4>
                </div>
                </>
                
            )
        })}
      </div>
      <div className={styles.totalCard}>
                    <p></p>
                    <h3 className={styles.quantity}>Quantity : {value}</h3>
                    <h3>Total : ${total}</h3>
                </div>
    </div>
  );
}

export default CartModal;

