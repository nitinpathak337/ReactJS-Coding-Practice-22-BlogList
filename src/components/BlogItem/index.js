// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {title, description, publishedDate} = props

  return (
    <>
      <div className="title-date-container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </>
  )
}

export default BlogItem
