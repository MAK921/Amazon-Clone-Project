import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/Product/ProtectedRoute/ProtectedRoute";
import Layout from "./Components/Layout/Layout";

// Lazy-load pages to optimize chunk sizes
const Landing = lazy(() => import("./Pages/Landing/Landing"));
const Payment = lazy(() => import("./Pages/Payment/Payment"));
const Orders = lazy(() => import("./Pages/Order/Order"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail/ProductDetail"));
const Results = lazy(() => import("./Pages/Results/Results"));
const Auth = lazy(() => import("./Pages/Auth/Auth"));

const stripePromise = loadStripe(
  "pk_test_51QxdbmLmaQMZtqxUgWOzXQaOT7Ujgl1cmjasHk2vOyEuK3rJxV1Fnx5xzPaHB7GQTesie00brDJTs6DDxyscIzr500HHTCa7Gj"
);

function Routing() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/payments"
              element={
                <ProtectedRoute
                  msg="You must log in to access payments"
                  redirect="/payments"
                >
                  <Elements stripe={stripePromise}>
                    <Payment />
                  </Elements>
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute
                  msg="You must log in to view your orders"
                  redirect="/orders"
                >
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;
