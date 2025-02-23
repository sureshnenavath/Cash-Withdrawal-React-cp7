import {useState} from 'react'
import './index.css'
import DenominationItemComponent from '../DenominationItem'

const CashWithdrawal = props => {
  const {denominationsList} = props
  const [balance, setBalance] = useState(2000)

  const balanceWithdrawButton = value => {
    setBalance(prevBalance => prevBalance - value)
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
          <p>Sarah Williams</p>
        </div>
        <div className="balance-section">
          <div className="balance-section-heading-div">
            <p className="balance-section-para">Your Balance</p>
          </div>
          <div>
            <p>{balance}</p>
            <p>In Rupees</p>
          </div>
        </div>
        <div className="withdrawal-section">
          <p className="withdrawal-heading">Withdraw</p>
          <p className="withdrawal-para">CHOOSE SUM (IN RUPEES)</p>
          {/* ✅ Wrap denominations in an unordered list */}
          <ul className="button-section" role="list">
            {denominationsList.map(eachItem => (
              <DenominationItemComponent
                key={eachItem.id}
                eachItem={eachItem}
                balanceWithdrawButton={balanceWithdrawButton}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default CashWithdrawal
