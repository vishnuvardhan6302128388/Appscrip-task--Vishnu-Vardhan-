import {useState} from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'

import './index.css'

const FooterSection = () => {
  const [email, setEmail] = useState('')
  const [metaHide, setMetaHide] = useState(false)
  const [linksHide, setLinkHide] = useState(false)
  const [followusHide, setFollowUsHide] = useState(false)

  const changeEmail = event => {
    setEmail(event.target.value)
  }

  const hides = () => {
    setMetaHide(!metaHide)
  }

  const hides2 = () => {
    setLinkHide(!linksHide)
  }

  const hides3 = () => {
    setFollowUsHide(!followusHide)
  }

  return (
    <div className="footer-section-container">
      <div className="about-section-container">
        <div className="singup-container">
          <h1 className="about-section-head">Be the first to know</h1>
          <p className="about-section-description">
            Sign up for updates from mettā muse.
          </p>
          <div className="subscribe-container">
            <input
              className="email-input"
              type="text"
              onChange={changeEmail}
              placeholder="Enter your e-mail..."
            />
            <button type="button" className="subscribe-button">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <hr className="hrLine-7" />
        <div className="contact-details-container">
          <h1 className="contact-head">CONTACT US</h1>
          <p className="contact-number">+44 221 133 5360</p>
          <p className="email">customercare@mettamuse.com</p>

          <hr className="hrLine-9" />
          <h1 className="currency-head">CURRENCY</h1>
          <div className="currency-type-container">
            <img
              src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1733907493/umdoz9xnmhutmd3lizex.png"
              alt="country flag"
              className="flag"
            />

            <h1 className="country-name">.USD</h1>
          </div>
          <p className="country-description">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr className="horizontal-line2" />
      <div className="information-section-container">
        <div className="service-section-container">
          <h1 className="meta-head">mettā muse</h1>
          <button type="button" onClick={hides} className="btn7">
            {metaHide ? 'Hide' : 'Show'}
          </button>
          {metaHide && (
            <div className="smallview-container">
              <p className="services">About Us</p>
              <p className="services">Stories</p>
              <p className="services">Artisans</p>
              <p className="services">Boutiques</p>
              <p className="services">Contact Us</p>
              <p className="services">EU Compliances Docs</p>
            </div>
          )}
          <div className="smallview-container2">
            <p className="services">About Us</p>
            <p className="services">Stories</p>
            <p className="services">Artisans</p>
            <p className="services">Boutiques</p>
            <p className="services">Contact Us</p>
            <p className="services">EU Compliances Docs</p>
          </div>
        </div>
        <hr className="hrLine-8" />
        <div className="quick-links-container">
          <h1 className="meta-head">QUICK LINKS</h1>
          <button type="button" onClick={hides2} className="btn7">
            {linksHide ? 'Hide' : 'Show'}
          </button>
          {linksHide && (
            <div className="smallview-container">
              <p className="services">Orders & Shipping</p>
              <p className="services">Join/Login as a Seller</p>
              <p className="services">Payment & Pricing</p>
              <p className="services">Return & Refunds</p>
              <p className="services">FAQs</p>
              <p className="services">Privacy Policy</p>
              <p className="services">Terms & Conditions</p>
            </div>
          )}
          <div className="smallview-container2">
            <p className="services">Orders & Shipping</p>
            <p className="services">Join/Login as a Seller</p>
            <p className="services">Payment & Pricing</p>
            <p className="services">Return & Refunds</p>
            <p className="services">FAQs</p>
            <p className="services">Privacy Policy</p>
            <p className="services">Terms & Conditions</p>
          </div>
        </div>
        <hr className="hrLine-8" />
        <div className="follow-us-container">
          <h1 className="meta-head">FOLLOW US</h1>
          <button type="button" onClick={hides3} className="btn7">
            {followusHide ? 'Hide' : 'Show'}
          </button>
          {followusHide && (
            <div className="social-media-container2">
              <AiFillInstagram className="icon" />
              <FaLinkedin className="icon" />
            </div>
          )}
          <div className="social-media-container">
            <AiFillInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>

          <hr className="horizontal-line2" />
          <h1 className="meta-head meta">mettā muse ACCEPTS</h1>
          <img
            src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1733910224/lipaiowcabdd41ptosex.png"
            alt="payment application"
            className="payment-img"
          />
          <img
            src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1733910224/lipaiowcabdd41ptosex.png"
            alt="payment application"
            className="payment-img2"
          />
        </div>
      </div>
      <p className="footer-description">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  )
}

export default FooterSection
