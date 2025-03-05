// import React, { useContext, useState } from 'react';
// import classes from './Payment.module.css';
// import Layout from '../../Components/Layout/Layout';
// import {DataContext} from '../../Components/DataProvider/DataProvider';
// import ProductCard from '../../Components/Product/ProductCard';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
// import { axiosInstance } from '../../Api/axios';
// // import {db} from '../../Utility/firebase'
// import { doc, setDoc, collection } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';


// function Payment() {
//   const [{ user, basket }, dispatch] = useContext(DataContext);
//   console.log(user);

//   const totalItems = basket?.reduce((amount, item) => {
//     return amount + (item?.amount || 0);
//   }, 0);

//   const totalPrice = basket?.reduce((amount, item) => {
//     return amount + item.price * item.amount;
//   }, 0);

//   const [cardError, setCardError] = useState(null);
//   const [processing, setProcessing] = useState(false)
  
  
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
  
  

//   const handleChange = (e) => {
//     console.log(e);
//     e?.error?.message ? setCardError(e.error.message) : setCardError("");
//   };


// const handlePayment = async (e) => {
//   e.preventDefault();

//   try {
//     // 1. Backend - Get client secret
//     setProcessing(true);
//     const response = await axiosInstance({
//       method: "POST",
//       url: `/payment/create?total=${totalPrice * 100}`, // Fix template literal
//     });

//     const clientSecret = response.data?.clientSecret;
//     if (!clientSecret) throw new Error("Failed to get client secret");

//     // 2. Stripe.js - Confirm card payment
//     const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (!paymentIntent) throw new Error("Payment failed");

//     // 3. Save order in Firestore
      
//       //   await db
//   // .collection("users")
//   // .doc(user.uid)
//   // .collection("orders")
//   // .doc(paymentIntent.id)
//   // .set({...});
//   // .set({
//   //  basket:basket,
//   //  amount:paymentIntent.amount,
//   //  created:paymentIntent.created,
  
  
//   const orderRef = doc(collection(db, "users", user.uid, "orders"), paymentIntent.id);
// await setDoc(orderRef, {
//   basket: basket,
//   amount: paymentIntent.amount,
//   created: paymentIntent.created,
  
//   // *...Empty the basket...*//
// dispatch({type:Type.EMPTY_BASKET});
  
  
// });


//     setProcessing(false);
//     navigate("/orders", { state: { msg: "You have placed a new order" } });

//   } catch (error) {
//     console.error("Payment error:", error);
//     setCardError(error.message);
//     setProcessing(false);
//   }
// };


//   return (
//     <div>
//       <div className={classes.payment_header}>
//         Checkout ({totalItems}) items
//       </div>


//       <section className={classes.payment_header}>
      

//         <div className={classes.flex}>
//           <h3>Delivery Address</h3>
//           <div>
//             <div>{user?.email}</div>
//             <div>27404 Greeley Rd, Maryland</div>
//             <div>Hyattsville, MD 20785</div>
//           </div>
//         </div>
//         <hr />

        
//         <div className={classes.flex}>
//           <h3>Review items and delivery</h3>
//           <div>
//             {basket?.map((item) => (
//               <ProductCard key={item.id} product={item} flex={true} />
//             ))}
//           </div>
//         </div>
//         <hr />

        
//         <div className={classes.flex}>
//           <h3>Payment Methods</h3>
//           <div className={classes.payment_card_container}>
//             <div className={classes.payment_details}>
//               <form onSubmit={handlePayment}>
//                 {cardError && (
//                   <small style={{ color: "red" }}>{cardError}</small>
//                 )}
              
//                 <CardElement onChange={handleChange} />
//                 <div className={classes.payment_price}>
//                   <div>
//                     <span style={{ display: "flex", gap: "10px" }}>
//                       <p>Total Order |</p>
//                       <CurrencyFormat amount={totalPrice} />
//                     </span>
//                   </div>
//                   <button type="submit">
//                   {
//   processing ? (
//     <div className={classes.loading}>
//     <ClipLoader color="grey" size={12}/>
//       <p>Please Wait...</p>
//     </div>
//   ) : "Pay Now"
// }
                  
                  
                  
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Payment;


// // import React, { useContext, useState } from "react";
// // import classes from "./Payment.module.css";
// // import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// // import { useNavigate } from "react-router-dom";
// // import { ClipLoader } from "react-spinners";
// // import { collection, doc, setDoc } from "firebase/firestore"; // Firestore v9 import
// // import { DataContext } from "../../Components/DataProvider/DataProvider";
// // import ProductCard from "../../Components/Product/ProductCard";
// // import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
// // import { axiosInstance } from "../../Api/axios";
// // import { db } from "../../Utility/firebase";

// // function Payment() {
// //   const [{ user, basket }] = useContext(DataContext);
// //   console.log("Current User:", user);

// //   const totalItems = basket?.reduce((amount, item) => amount + (item?.amount || 0), 0);
// //   const totalPrice = basket?.reduce((amount, item) => amount + item.price * item.amount, 0);

// //   const [cardError, setCardError] = useState(null);
// //   const [processing, setProcessing] = useState(false);

// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setCardError(e?.error?.message || "");
// //   };

// //   const handlePayment = async (e) => {
// //     e.preventDefault();
// //     setProcessing(true);

// //     try {
// //       // 1️⃣ Request Payment Intent from Backend
// //       console.log("🔹 Sending request to backend...");
// //       const response = await axiosInstance.post(`/payment/create?total=${totalPrice * 100}`);

// //       const clientSecret = response.data?.clientSecret;
// //       if (!clientSecret) throw new Error("⚠️ Failed to retrieve client secret.");

// //       console.log("✅ Received Client Secret:", clientSecret);

// //       // 2️⃣ Confirm Card Payment with Stripe
// //       const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// //         payment_method: { card: elements.getElement(CardElement) },
// //       });

// //       if (!paymentIntent) throw new Error("❌ Payment failed");

// //       console.log("✅ Payment Successful:", paymentIntent);

// //       // 3️⃣ Save Order to Firestore
// //       console.log("📦 Saving order to Firestore...");
// //       await setDoc(doc(collection(db, "users", user?.uid, "orders"), paymentIntent.id), {
// //         basket,
// //         amount: paymentIntent.amount,
// //         created: paymentIntent.created,
// //       });

// //       console.log("✅ Order saved successfully!");

// //       setProcessing(false);
// //       navigate("/orders", { state: { msg: "You have placed a new order!" } });

// //     } catch (error) {
// //       console.error("❌ Payment error:", error);
// //       setCardError(error.message);
// //       setProcessing(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className={classes.payment_header}>
// //         Checkout ({totalItems}) items
// //       </div>

// //       <section className={classes.payment_header}>
// //         {/* Address */}
// //         <div className={classes.flex}>
// //           <h3>Delivery Address</h3>
// //           <div>
// //             <div>{user?.email}</div>
// //             <div>27404 Greeley Rd, Maryland</div>
// //             <div>Hyattsville, MD 20785</div>
// //           </div>
// //         </div>
// //         <hr />

// //         {/* Product Review */}
// //         <div className={classes.flex}>
// //           <h3>Review items and delivery</h3>
// //           <div>
// //             {basket?.map((item) => (
// //               <ProductCard key={item.id} product={item} flex={true} />
// //             ))}
// //           </div>
// //         </div>
// //         <hr />

// //         {/* Card Form */}
// //         <div className={classes.flex}>
// //           <h3>Payment Methods</h3>
// //           <div className={classes.payment_card_container}>
// //             <div className={classes.payment_details}>
// //               <form onSubmit={handlePayment}>
// //                 {cardError && <small style={{ color: "red" }}>{cardError}</small>}

// //                 <CardElement onChange={handleChange} />
// //                 <div className={classes.payment_price}>
// //                   <div>
// //                     <span style={{ display: "flex", gap: "10px" }}>
// //                       <p>Total Order |</p>
// //                       <CurrencyFormat amount={totalPrice} />
// //                     </span>
// //                   </div>

// //                   <button type="submit">
// //                     {processing ? (
// //                       <div className={classes.loading}>
// //                         <ClipLoader color="grey" size={12} />
// //                         <p>Please Wait...</p>
// //                       </div>
// //                     ) : (
// //                       "Pay Now"
// //                     )}
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default Payment;



import React, { useContext, useState } from 'react';
import classes from './Payment.module.css';
import Layout from '../../Components/Layout/Layout';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { db } from '../../Utility/firebase';
import { doc, setDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(user);

  const totalItems = basket?.reduce((amount, item) => amount + (item?.amount || 0), 0);
  const totalPrice = basket?.reduce((amount, item) => amount + item.price * item.amount, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e);
    setCardError(e?.error?.message || '');
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      // 1. Request client secret from the backend
      const response = await axiosInstance.post(`/payment/create?total=${totalPrice * 100}`);
      const clientSecret = response.data?.clientSecret;
      if (!clientSecret) throw new Error("Failed to get client secret");

      // 2. Confirm card payment using Stripe.js
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card element not found");

      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });
      if (error) throw new Error(error.message);
      if (!paymentIntent) throw new Error("Payment failed");

      // 3. Save order in Firestore using Firebase v9 modular syntax
      const orderRef = doc(collection(db, "users", user.uid, "orders"), paymentIntent.id);
      await setDoc(orderRef, {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      // Empty the basket (ensure your reducer handles this action type)
      dispatch({ type: "EMPTY_BASKET" });

      setProcessing(false);
      navigate("/orders", { state: { msg: "You have placed a new order" } });
    } catch (error) {
      console.error("Payment error:", error);
      setCardError(error.message);
      setProcessing(false);
    }
  };

  return (
    <div>
      <div className={classes.payment_header}>
        Checkout ({totalItems}) items
      </div>

      <section className={classes.payment_header}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>27404 Greeley Rd, Maryland</div>
            <div>Hyattsville, MD 20785</div>
          </div>
        </div>
        <hr />

        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p>
                      <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>
                  <button type="submit" disabled={processing || !stripe || !elements}>
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="grey" size={12} />
                        <p>Please Wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
