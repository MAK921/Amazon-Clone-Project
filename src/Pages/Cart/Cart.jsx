import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import classes from './Cart.module.css';
import {Type} from '../../Utility/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);


  const total = basket?.reduce((amount, item) => 
  
   {return amount + item.price * item.amount}, 0);
  
  
  console.log(basket);

const increment = (item)=>{
dispatch({
type:Type.ADD_TO_BASKET,
item
})}
const decrement=(id)=>{
dispatch({
type: Type.REMOVE_FROM_BASKET,
id
})}


  return (
    <>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello </h2>
          <h3>Your Shopping Basket</h3>
          <hr /> 
          {basket?.length == 0 ? (
  <p>Oops! No items in your cart</p>
): (
  basket?.map((item, i) => (
    <section className={classes.cart_product} key={item.id || i}>
      <ProductCard
        product={item}
        renderDes={true}
        renderAdd={false}
        flex={true}
      />
      <div className={classes.btn_container}>
        <button className={classes.btn} onClick={() => increment(item)}>
          <IoIosArrowUp size={25} />
        </button>
        <span>{item.amount}</span>
        <button className={classes.btn} onClick={() => decrement(item.id)}>
          <IoIosArrowDown size={25} />
        </button>
      </div>
    </section>
  ))
) }

         
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            
            <span className={classes.gift_option}>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payments" className={classes.checkout_button}>
              Continue to checkout
            </Link>
          </div>
        )}
      </section>
    </>
  );
}

export default Cart;


