import React from "react";
import "./Footer.css";
import Logo from "../Imgs/logo2.png";
import { BiFontSize } from "react-icons/bi";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="disclaimer-area">
          <p className="disclaimer-desc">
            <b>Disclaimer:</b> This Amazon clone project is a mere simulation
            and is not affiliated with Amazon in any way.
          </p>
        </div>
      </div>
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Careers</p>
            <p>Amazon Newsletter</p>
            <p>About Amazon</p>
            <p>Accessibility</p>
            <p>Sustainability</p>
            <p>Press Center</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            <p>Amazon Science</p>
          </div>
          <div className="second-row">
            <p className="bold">Make Money with Us</p>
            <p>Sell on Amazon</p>
            <p>Sell apps on Amazon</p>
            <p>Supply to Amazon</p>
            <p>Protect & Build Your Brand</p>
            <p>Become an Affiliate</p>
            <p>Become a Delivery Driver</p>
            <p>Start a Package Delivery Business</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            {/* <p>Become an Amazon Hub Partner</p> */}
            {/* <p>›See More Ways to Make Money</p> */}
          </div>
          <div className="third-row">
            <p className="bold">Amazon Payment Products</p>
            <p>Amazon Visa</p>
            <p>Amazon Store Card</p>
            <p>Amazon Secured Card</p>
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Credit Card Marketplace</p>
            <p>Reload Your Balance</p>
            <p>Gift Cards</p>
            <p>Amazon Currency Converter</p>
           </div>
          <div className="fourth-row">
            <p className="bold">Let Us Help You</p>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates & Policies</p>
            <p>Amazon Prime</p>
            <p>Returns & Replacements</p>
            <p>Manage Your Content and Devices</p>
            <p>Recalls and Product Safety Alerts</p>
            <p>Registry & Gift List</p>
            <p>Help</p>
          </div>
        </div>
       
        <div className="developer">
          <img src={Logo} className="amazon-img" />
          <div className="dev-data">
            <p>&copy; 2025 | Developed by </p>
            <a
              className="dev-link"
              href="https://mellifluous-centaur-dd7f39.netlify.app/"
              target="_blank"
            >
              <p>Abera Tefera</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;