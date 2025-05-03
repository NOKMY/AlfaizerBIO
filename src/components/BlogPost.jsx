import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogData";
import "../css/BlogPost.css"; 
function BlogPost() {
  const { id } = useParams();
  const post = blogData.find((entry) => entry.id === id);

  if (!post) {
    return (
      <div className="blog-post-container">
        <h2>Post not found</h2>
        <Link to="/tour">Back to Tour</Link>
      </div>
    );
  }

  return (
    <div className="blog-content">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      /><br></br>
      <Link to="/tour"
  rel="noopener noreferrer"
  className="print-btn"
>
  Go Back
      </Link>
    </div>
  );
}

export default BlogPost;
