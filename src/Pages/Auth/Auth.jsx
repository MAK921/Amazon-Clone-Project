import React, { useState, useContext } from 'react';
import classes from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
import { ClipLoader } from "react-spinners";

function Auth({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  
  const [{ user }, dispatch] = useContext(DataContext);
  
  
  
  const navigate = useNavigate()
  
  // console.log(user);
  
    const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    
    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      try {
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        console.log(userInfo);
        
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signIn: false });
        // if (onClose) onClose();
        
        navigate("/")
        
        
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading({ ...loading, signIn: false });
      }
    } else {
      setLoading({ ...loading, signUp: true });
      try {
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signUp: false });
        // if (onClose) onClose();
        
        navigate("/")

      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading({ ...loading, signUp: false });
      }
    }
  };
  
  return (
    <section className={classes.login}>
      {/* Logo */}
      <Link to="/">
        <img 
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt="Amazon Logo"
        /> 
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button 
            type="submit" 
            name="signin" 
            onClick={authHandler} 
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color='#000' size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {error && <p className={classes.error}>{error}</p>}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &amp; Sale.
          Please see our privacy notice, cookies Notice, and Interests-Based Ads Notice.
        </p>
        <button 
          type="button" 
          name="signUp" 
          onClick={authHandler} 
          className={classes.login_registorButton}
        >
        
          {loading.signUp ? (
              <ClipLoader color='#000' size={15} />
            ) : (
              "Create Your Amazon Account "
            )}
        
        
       
        </button>
        {error && <small style={{ paddingTop: "5px", color:"red" }}>{error}</small>}
      </div> 
    </section>
  );
}

export default Auth;
