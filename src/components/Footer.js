import React from 'react'
import {Link} from 'react-router-dom';
import {BsFacebook,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs';
const Footer = () => {
  return <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/email.png" alt="newsletter"/>
              <h2 className="mb-0 text-white"> Sign Up for Newsletter</h2>
            </div> 
          </div>
          <div className="col-7">
          <div className="input-group">
            <input type="text" className="form-control py-1" placeholder="Your Telephone Number" aria-label="Search Products Here..." aria-describedby="basic-addon2"/>
            <span className="input-group-text p-2" id="basic-addon2">
              Subscribe
              </span>
          </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div className="text-white fs-6">
              <address>Hno: 254 Spring Valley, <br/> Baraton, Kapsabet <br/> PinCode: 10300</address>
              <a href="tel: +254 743827738" className="mt-3 d-block mb-1 text-white"> +254743827738</a>
              <a href="mailto:mwangileny18@gmail.com" className="mt-2 d-block mb-0 text-white">mwangileny18@gmail.com</a>
              <div className="social icons d-flex align-items-center gap-30 mt-4">
                <a className="text-white" href="">
                  <BsFacebook className='fs-4' />
                </a>
                <a className="text-white"  href="">
                  <BsGithub className='fs-4'/>
                </a>
                <a className="text-white" href="">
                  <BsYoutube className='fs-4'/>
                </a>
                <a className="text-white" href="">
                  <BsInstagram className='fs-4'/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
          <h4 className="text-white mb-4">Information</h4>
          <div className="footer-link d-flex flex-column">
            <Link className="text-white py-2 mb-1">Privacy Policy</Link>
            <Link className="text-white py-2 mb-1">Refund Policy</Link>
            <Link className="text-white py-2 mb-1">Shipping Policy</Link>
            <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
            <Link className="text-white py-2 mb-1">Blogs</Link>
          </div>
          </div>
          <div className="col-3">
          <h4 className="text-white mb-4">Account</h4>
          <div className="footer-link d-flex flex-column">
            <Link className="text-white py-2 mb-1">About Us</Link>
            <Link className="text-white py-2 mb-1">Faq</Link>
            <Link className="text-white py-2 mb-1">Contact</Link>
          </div>
          </div>
          <div className="col-2">
          <h4 className="text-white mb-4">Quick Links</h4>
          <div className="footer-link d-flex flex-column">
            <Link className="text-white py-2 mb-1">Shipping and delivery</Link>
            <Link className="text-white py-2 mb-1">How to Order?</Link>
            <Link className="text-white py-2 mb-1">Return Policy</Link>
            <Link className="text-white py-2 mb-1">Advertise with Mwana</Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 mb-0 text-white">
            <p className="text-center">&copy; {new Date().getFullYear()}; Powered by developer's corner</p>
          </div>
        </div>
      </div>
    </footer>
  </>;
}

export default Footer