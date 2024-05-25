// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import CryptocurrenyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencylist: [], isLoader: true}

  componentDidMount() {
    this.getcryptocurrencylist()
  }
  getcryptocurrencylist = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const formateData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptocurrencylist: formateData, isLoader: false})
  }

  render() {
    const {cryptocurrencylist, isLoader} = this.state

    return (
      <div>
        <div className="heading-image-container">
          <h1>Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <div className="list-border-container">
          {isLoader ? (
            <div data-testid="loader">
              {' '}
              <Loader type="TailSpan" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            cryptocurrencylist.map(each => (
              <CryptocurrenyItem cryptoDta={each} key={each.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
