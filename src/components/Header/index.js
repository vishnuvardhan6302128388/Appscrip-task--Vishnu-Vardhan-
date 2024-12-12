import {Component} from 'react'
import {IoSearchOutline, IoBagOutline, IoPersonOutline} from 'react-icons/io5'
import {GrFavorite} from 'react-icons/gr'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

class Header extends Component {
  state = {isHide: false}

  hiding = () => {
    this.setState(prev => ({isHide: !prev.isHide}))
  }

  render() {
    const {isHide} = this.state
    return (
      <div className="header-container">
        <div className="top-header-container">
          <div className="hamburger-container">
            <div className="logos-container">
              <button
                type="button"
                onClick={this.hiding}
                className="hamburgerbtn"
              >
                <GiHamburgerMenu size={30} />
              </button>
              <img
                src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1733893123/od6yjwn507yjlkzoq5bf.jpg"
                alt="logo"
                className="logo-image2"
              />
            </div>
            {isHide && (
              <ul className="choice-list2">
                <li className="choice-item">SHOP</li>
                <li className="choice-item">SKILLS</li>
                <li className="choice-item">STORIES</li>
                <li className="choice-item">ABOUT</li>
                <li className="choice-item">CONTACT US</li>
              </ul>
            )}
          </div>
          <img
            src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1733893123/od6yjwn507yjlkzoq5bf.jpg"
            alt="logo"
            className="logo-image"
          />
          <h1 className="logo">LOGO</h1>
          <div className="small-view-icons">
            <IoSearchOutline size={22} />
            <GrFavorite size={22} />
            <IoBagOutline size={22} />
          </div>

          <div className="icons-container">
            <IoSearchOutline size={22} />
            <GrFavorite size={22} />
            <IoBagOutline size={22} />
            <IoPersonOutline size={22} />
            <h1 className="language">
              ENG
              <RiArrowDropDownLine size={30} />
            </h1>
          </div>
        </div>

        <ul className="choice-list">
          <li className="choice-item">SHOP</li>
          <li className="choice-item">SKILLS</li>
          <li className="choice-item">STORIES</li>
          <li className="choice-item">ABOUT</li>
          <li className="choice-item">CONTACT US</li>
        </ul>
        <hr className="horizontal-line" />
        <div className="menu-container">
          <p className="home">HOME | SHOP</p>
        </div>
      </div>
    )
  }
}

export default Header
