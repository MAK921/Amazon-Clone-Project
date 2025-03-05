import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Order/Order';
import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Results from './Pages/Results/Results';
import Layout from './Components/Layout/Layout';
import Auth from './Pages/Auth/Auth';
import SignIn from './Pages/Auth/Auth';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


function Routing() {

const stripePromise = loadStripe('pk_test_51QxdbmLmaQMZtqxUgWOzXQaOT7Ujgl1cmjasHk2vOyEuK3rJxV1Fnx5xzPaHB7GQTesie00brDJTs6DDxyscIzr500HHTCa7Gj');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/payments" element={
          
          <Elements stripe={stripePromise}>
          
         
          
          <Payment /> 
          </Elements>} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/cart" element={<Cart />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
