import {Component} from 'react'

import Header from '../Header'

import FooterSection from '../FooterSection'

import FilterSection from '../FilterSection'

import ProductItemCard from '../ProductItemCard'

import './index.css'

class Home extends Component {
  state = {productList: [], isShow: false}

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
    const url = 'https://fakestoreapi.com/products'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data
    this.setState({productList: updatedData})
  }

  hideBtnClicked = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  filterSection = () => {
    const {isShow} = this.state
    return (
      <div className="filter-container">
        <div className="sub-filter-container">
          <p className="items">3425 Items</p>
          <button
            type="button"
            className="filter-head"
            onClick={this.hideBtnClicked}
          >
            {isShow ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
          <button
            type="button"
            className="filter-head2"
            onClick={this.hideBtnClicked}
          >
            FILTER
          </button>
        </div>

        <select className="dropdown-list">
          <option selected className="option">
            RECOMMENDED
          </option>
          <option className="option">NEWEST FIRST</option>
          <option className="option">POPULAR</option>
          <option className="option">PRICE: HIGH TO LOW</option>
          <option className="option">PRICE: LOW TO HIGH</option>
        </select>
      </div>
    )
  }

  render() {
    const {productList, isShow} = this.state
    console.log(productList)
    return (
      <>
        <Header />
        <div className="home-container">
          <h1 className="home-head">DISCOVER OUR PRODUCTS</h1>
          <p className="home-description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
          <hr className="horizontal-line3" />
          {this.filterSection()}
          <hr className="horizontal-line4" />
          <div className="filter-products-container">
            {isShow && <FilterSection />}

            <ul className="products2-container">
              {productList.map(each => (
                <ProductItemCard key={each.id} itemDetails={each} />
              ))}
            </ul>
          </div>
        </div>
        <FooterSection />
      </>
    )
  }
}
export default Home
