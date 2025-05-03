import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";
import "../css/Tour.css"; 

function Tour() {
  return (
    <div className="tour-container">
      <h1></h1>
      <div className="blog-list">
        {blogData.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.summary}</p>
            <Link to={`/tour/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tour;