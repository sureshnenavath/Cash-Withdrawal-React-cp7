import './index.css'

const DenominationItemComponent = props => {
  const {eachItem, balanceWithdrawButton} = props

  const withdrawButton = () => {
    balanceWithdrawButton(eachItem.value)
  }

  return (
    <li role="listitem">
      <button className="button" onClick={withdrawButton}>
        {eachItem.value}
      </button>
    </li>
  )
}

export default DenominationItemComponent
