import {useState} from 'react'
import './index.css'
import DenominationItemComponent from '../DenominationItem'

const CashWithdrawal = props => {
  const {denominationsList} = props
  const [balance, serBalance] = useState(2000)
  const balanceWithdrawButton = value => {
    serBalance(prevBalance => prevBalance - value)
  }
  return (
    <div className="main-container">
      <div className="container">
        <div className="profile-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
            className="profile-pic"
            alt="Picture"
          />
          <p>Saraha Williams</p>
        </div>
        <div className="balance-section">
          <div className="balance-section-heading-div">
            <h1 className="balance-section-heading">Your Balance</h1>
          </div>
          <div>
            <h1>{balance}</h1>
            <p>In Rupees</p>
          </div>
        </div>
        <div className="withdrawal-section">
          <h1 className="withdrawal-heading">withdraw</h1>
          <p className="withdrawal-para">CHOOSE SUM(IN RUPEES)</p>
          <div className="button-section">
            {denominationsList.map(eachItem => (
              <DenominationItemComponent
                key={eachItem.id}
                eachItem={eachItem}
                balanceWithdrawButton={balanceWithdrawButton}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default CashWithdrawal
