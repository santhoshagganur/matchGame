import './index.css'

const TabItem = props => {
  const {eachItem, changeActiveTab, activeTab} = props
  const {tabId} = eachItem

  const changeTab = () => {
    changeActiveTab(tabId)
  }

  const makeDecision = activeTab === tabId ? 'decision' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${makeDecision}`}
        onClick={changeTab}
      >
        {eachItem.displayText}
      </button>
    </li>
  )
}

export default TabItem
