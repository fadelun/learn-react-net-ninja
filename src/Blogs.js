const Blogs = ({ blogs, title }) => {
  return (
    <div className="blogs">
      <h1> {title} </h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2 className="title">{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
