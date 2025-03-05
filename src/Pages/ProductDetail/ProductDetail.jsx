import React, { useEffect, useState } from 'react';
import classes from './ProductDetail.module.css';
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
import {productUrl} from '../../Api/endPoints'

function ProductDetail() {
  const { productId } = useParams();
  
  const [isloading, setisLoading] = useState(false)
  
  const [product, setProduct] = useState({});

  
  useEffect(() => {
  
  setisLoading(true)
  
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        
        
        setisLoading(false)
        
        
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        
        setisLoading(false)
        
        
      });
  }, [productId]);



console.log(product);

  return (
    <>
    
    {isloading ? (<Loader />) : (<ProductCard 
    product={product}
    flex={true}
    renderDes={true}
    renderAdd={true}
    />)}</>
  );
}


export default ProductDetail;


