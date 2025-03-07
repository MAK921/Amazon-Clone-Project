import React, { useContext } from 'react';
import { CiSearch } from 'react-icons/ci';
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from 'react-icons/bi';
import './header.css';
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';
import { Link } from 'react-router-dom';
import {auth} from '../../Utility/firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return amount + (item?.amount || 0);
  }, 0);

  return (
    <section className='fixed2'>
      <section className="header">
        <div className="header_logo-delivery">
          <Link to="/" className="header_logo">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>
          <Link to="/delivery" className="header_delivery">
            <span>
              <SlLocationPin />
            </span>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </Link>
        </div>

        <div className="header_search">
          <select name="category" id="category">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search product" />
          <button type="submit" className="header_search-button">
            <CiSearch />
          </button>
        </div>
 
        <nav className="header_nav">
          <div className="header_language">
            <Link to="/">
              <img
                src="https://static.vecteezy.com/system/resources/previews/029/089/312/non_2x/united-state-of-america-usa-flag-transparent-pattern-template-free-png.png"
                alt="USA flag"
              />
            </Link>
            <select name="language" id="language">
              <option value="EN">EN</option>
            </select>
          </div>
          <Link to={user ? "/" : "/auth"}>
            <div className='sign_in'>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account &amp; Lists</span>
                </>
              )}
            </div>
          </Link>
          <Link to="/orders" className="header_orders">
            <p>Returns</p>
            <span>&amp; Orders</span>
          </Link>
          <Link to="/cart" className="header_cart">
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </nav>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
