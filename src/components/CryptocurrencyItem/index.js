// Write your JS code here
import './index.css'

const CryptocurrenyItem = props => {
  const {cryptoDta} = props
  const {id, currencyName, currencyLogo, euroValue, usdValue} = cryptoDta

  return (
    <div>
      <div className="heading-coin-usd-container">
        <h1>Coin Type</h1>
        <div className="euro-usd-container">
          <h1 className="usd">USD</h1>
          <h1 className="usd">EURO</h1>
        </div>
      </div>
      <ul className="justify-container">
        <li className="currencyLogo-name-container">
          <img
            src={currencyLogo}
            className="currencyLogo-style"
            alt={currencyName}
          />
          <p className="usd">{currencyName}</p>
        </li>
        <li className="usd-euro-container">
          <p className="usd">{usdValue}</p>
          <p className="usd">{euroValue}</p>
        </li>
      </ul>
    </div>
  )
}
export default CryptocurrenyItem
