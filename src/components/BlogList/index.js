// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blogListContainer">
      <ul>
        {blogsList.map(eachItem => (
          <BlogItem key={eachItem.id} blogItem={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
