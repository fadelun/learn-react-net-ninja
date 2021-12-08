import { Link } from "react-router-dom";

const Blogs = (props) => {
  const { blogs, title } = props;

  return (
    <div className="blogs">
      <h1> {title} </h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2 className="title">{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
