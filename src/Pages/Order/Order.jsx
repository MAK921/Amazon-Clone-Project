import React, { useContext, useState, useEffect } from 'react';
import classes from './Order.module.css';
import Layout from '../../Components/Layout/Layout';
import { db } from '../../Utility/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';

function Order() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // Query orders for the current user and order them by "created" descending
      const ordersQuery = query(
        collection(db, "users", user.uid, "orders"),
        orderBy("created", "desc")
      );
      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        console.log(snapshot);
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
      // Cleanup subscription on unmount
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <section className={classes.container}>
      <div className={classes.order_container}>
        <h2>User Orders</h2>
        {orders?.length === 0 && (
          <div style={{ padding: "20px" }}>
            You do not have orders yet.
          </div>
        )}
        <div>
          {orders?.map((eachOrder) => (
            <div key={eachOrder.id}>
              <hr />
              <p>Order ID: {eachOrder.id}</p>
              {eachOrder.data?.basket?.map((order) => (
                <ProductCard 
                  key={order.id} 
                  product={order} 
                  flex={true} 
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Order;

