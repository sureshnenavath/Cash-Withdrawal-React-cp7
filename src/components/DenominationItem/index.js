import './index.css'
const DenominationItemComponent = props => {
  const {eachItem, balanceWithdrawButton} = props
  const withdrawButton = () => {
    balanceWithdrawButton(eachItem.value)
  }
  return (
    <button className="button" onClick={withdrawButton}>
      {eachItem.value}
    </button>
  )
}
export default DenominationItemComponent
