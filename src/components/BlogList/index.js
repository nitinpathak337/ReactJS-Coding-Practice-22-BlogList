// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {details} = props

  const {title, description, publishedDate} = details

  return (
    <li className="list-item">
      <BlogItem
        title={title}
        description={description}
        publishedDate={publishedDate}
      />
    </li>
  )
}

export default BlogList
