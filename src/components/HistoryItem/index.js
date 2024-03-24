import './index.css'

const HistoryItem = props => {
  const {itemDetails, onDeleteItem} = props
  const {id, title, timeAccessed, domainUrl, logoUrl} = itemDetails

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="list-item">
        <p className="item-time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="item-logo" />
        <p className="item-title">{title}</p>
        <p className="item-domain">{domainUrl}</p>
      </div>
      <div className="delete-icon-container">
        <button
          data-testid="delete"
          className="delete-icon"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
