import './index.css'

const Thumbnails = props => {
  const {eachItem} = props
  const {thumbnailUrl} = eachItem

  return (
    <li>
      <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
    </li>
  )
}

export default Thumbnails
