import React from "react";
import "../blog/Blog.css";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="background">
      <Header />
      <div className="blogbox-container">
        <div className="blog-box">
          <div className="blogbox">
            <h1>What To Put On GitHub To Impress Potential Employers</h1>
            <br />
            <p>
              When it comes to looking for a new job, a GitHub portfolio is a
              powerful tool for developers to demonstrate their skills to
              potential employers. But what should you actually put on your
              GitHub portfolio? In this post, we’ll break down the role of
              GitHub in a developer’s job search and what to put on GitHub to
              land your next job.
            </p>
            <br />
            <Link to="/BlogArtical" class="button btn2">
              Read More
            </Link>
          </div>
          <div className="blogbox-section">
            <div className="artical">
              <Link to="/Update">
                <div className="artical-div">
                  <h2>CodeBox News & Update</h2>
                  <span>20/05/2022</span>
                </div>
              </Link>
              <br />
              <Link to="/Update">
                <div className="artical-div">
                  <h2>Challenges Update</h2>
                  <span>19/05/2022</span>
                </div>
              </Link>
            </div>
            <br />
            <br />
            <div className="artical">
              <Link to="/Update">
                <div className="artical-div">
                  <h2>Technology</h2>
                  <span>20/05/2022</span>
                </div>
              </Link>
              <br />
              <Link to="/Update">
                <div className="artical-div">
                  <h2>Education</h2>
                  <span>19/05/2022</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
