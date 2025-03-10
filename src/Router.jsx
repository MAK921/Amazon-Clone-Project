// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Landing from './Pages/Landing/Landing';
// import Payment from './Pages/Payment/Payment';
// import Orders from './Pages/Order/Order';
// import Cart from './Pages/Cart/Cart';
// import ProductDetail from './Pages/ProductDetail/ProductDetail';
// import Results from './Pages/Results/Results';
// import Layout from './Components/Layout/Layout';
// import Auth from './Pages/Auth/Auth';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import ProtectedRoute from './Components/Product/ProtectedRoute/ProtectedRoute';

// const stripePromise = loadStripe('pk_test_51QxdbmLmaQMZtqxUgWOzXQaOT7Ujgl1cmjasHk2vOyEuK3rJxV1Fnx5xzPaHB7GQTesie00brDJTs6DDxyscIzr500HHTCa7Gj');

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Landing />} />
//           <Route path="auth" element={<Auth />} />
//           <Route
//             path="payments"
//             element={
//               <ProtectedRoute msg={"You must log in to access your orders"} redirect="/auth">
//                 <Elements stripe={stripePromise}>
//                   <Payment />
//                 </Elements>
//               </ProtectedRoute>
//             }
//           />
//           <Route path="signIn" element={<SignIn />} />
//           <Route path="orders" element={
//            <ProtectedRoute 
//            msg={"You must log in to pay"} redirect="/orders">
//                 <Elements stripe={stripePromise}>
//                   <Orders />
//                 </Elements>
//               </ProtectedRoute>
          
//           <Orders />} />
//           <Route path="products/:productId" element={<ProductDetail />} />
//           <Route path="category/:categoryName" element={<Results />} />
//           <Route path="cart" element={<Cart />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Order/Order';
import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Results from './Pages/Results/Results';
import Layout from './Components/Layout/Layout';
import Auth from './Pages/Auth/Auth';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Components/Product/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe('pk_test_51QxdbmLmaQMZtqxUgWOzXQaOT7Ujgl1cmjasHk2vOyEuK3rJxV1Fnx5xzPaHB7GQTesie00brDJTs6DDxyscIzr500HHTCa7Gj');

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="auth" element={<Auth />} />
          <Route
            path="payments"
            element={
              <ProtectedRoute msg="You must log in to access payments" redirect="/auth">
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route
            path="orders"
            element={
              <ProtectedRoute msg="You must log in to view your orders" redirect="/payments">
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="category/:categoryName" element={<Results />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
