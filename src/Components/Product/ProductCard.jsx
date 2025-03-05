import React, { useContext } from "react";
import './Product.module.css'
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";import { Type } from "../../Utility/action.type";

function ProductCard({ product,  renderDes, renderAdd, flex}) {
  const {image, title, id, rating, price, description } = product;
  
 
  const [state, dispatch] = useContext(DataContext)
  

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { 
      image, 
      title, 
      id, 
      rating, 
      price, 
      description},
    });
  };

 return (
    <div className={`${classes.card_container} ${flex ? classes.product_flexed : ""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={classes.image} />
      </Link>
      
      <div>
        <h3 className={classes.title}>{title}</h3>
        {renderDes && <p className={classes.description}>{description}</p>}
        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0}</small>
        </div>
        
        <div className={classes.price}>
          <CurrencyFormat amount={price} />
        </div>
               
        {
        renderAdd &&  <button className={classes.button} onClick={addToCart}>
          Add to cart
        </button>
        }
      </div>
    </div>
  );
}

export default ProductCard;

