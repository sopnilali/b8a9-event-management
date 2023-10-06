import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
          <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <Link className="link link-hover">Branding</Link> 
    <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </>
    );
};

export default Footer;