import './index.css'

const BlogList = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList

  return (
    <li className="user-list">
      <div className="user-info-list">
        <div className="postAndSummary">
          <h1 className="post">{title}</h1>
          <p className="Summary">{description}</p>
        </div>
        <div className="published-date">
          <p className="date">{publishedDate}</p>
        </div>
      </div>
      <hr className="horizontal" />
    </li>
  )
}
export default BlogList
