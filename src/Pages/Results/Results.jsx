import React, { useEffect, useState } from 'react';
import classes from './Results.module.css';
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
import { productUrl } from '../../Api/endPoints'; 

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${productUrl}/products/category/${categoryName}`);
        setResults(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryName) {
      fetchData();
    }
  }, [categoryName]);

  return (
    <>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                renderDes={false}
                renderAdd={true}
                
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Results;
