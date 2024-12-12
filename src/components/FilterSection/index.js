import {Component} from 'react'

import {MdArrowDropDown} from 'react-icons/md'

import './index.css'

class FilterSection extends Component {
  render() {
    return (
      <div className="filter-section-container">
        <div className="filter-container2">
          <input className="checkbox-input" type="checkbox" id="checkbox" />
          <label className="label" htmlFor="checkbox">
            Customizable
          </label>
        </div>
        <hr className="line" />
        <div className="filter-container3">
          <div className="sub-filter-container">
            <h1 className="filter-heads">IDEAL FOR</h1>
            <MdArrowDropDown className="symbol" size={30} />
          </div>
          <p className="filter-type">All</p>
        </div>
        <hr className="line" />
        <div className="filter-container3">
          <div className="sub-filter-container">
            <h1 className="filter-heads">OCCASIONAL</h1>
            <MdArrowDropDown className="symbol" size={30} />
          </div>
          <p className="filter-type">All</p>
        </div>
        <hr className="line" />
        <div className="filter-container3">
          <div className="sub-filter-container">
            <h1 className="filter-heads">WORK</h1>
            <MdArrowDropDown className="symbol" size={30} />
          </div>
          <p className="filter-type">All</p>
        </div>
        <hr className="line" />
        <div className="filter-container3">
          <div className="sub-filter-container">
            <h1 className="filter-heads">FABRIC</h1>
            <MdArrowDropDown className="symbol" size={30} />
          </div>
          <p className="filter-type">All</p>
        </div>
        <hr className="line" />
        <div className="filter-container3">
          <div className="sub-filter-container">
            <h1 className="filter-heads">SEGMENT</h1>
            <MdArrowDropDown className="symbol" size={30} />
          </div>
          <p className="filter-type">All</p>
        </div>
        <hr className="line" />
        <div className="filter-container3">
          <div className="sub-filter-container">
            <h1 className="filter-heads">SUITABLE FOR</h1>
            <MdArrowDropDown className="symbol" size={30} />
          </div>
          <p className="filter-type">All</p>
        </div>
        <hr className="line" />
        <div className="filter-container3">
          <div className="sub-filter-container">
            <h1 className="filter-heads">RAW MATERIALS</h1>
            <MdArrowDropDown className="symbol" size={30} />
          </div>
          <p className="filter-type">All</p>
        </div>
        <hr className="line" />
        <div className="filter-container3">
          <div className="sub-filter-container">
            <h1 className="filter-heads">PATTERN</h1>
            <MdArrowDropDown className="symbol" size={30} />
          </div>
          <p className="filter-type">All</p>
        </div>
        <hr className="line" />
      </div>
    )
  }
}

export default FilterSection
