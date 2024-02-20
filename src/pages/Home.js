import { Fragment, useEffect, useState } from 'react';
import { FaBlogger } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from './../assets/image/blog.jpg';
import img1 from './../025.svg';
function Home() {
    return(
        <Fragment>
        <nav className="navigation">
          <div className="nav-left">
            <span>
            <Link to={'/'}><FaBlogger size={60} /></Link>
            </span>

            <ul>
              {/* <li><a href="index.html">HOME</a></li>
              <li><a href="/">About</a></li>
              <li><a href="">Contact</a></li> */}
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to='Contact'>contact</Link>
              </li>
              <li>
                <Link to='About'>blog_post</Link>
              </li>
              

            </ul>
            <form action="search.html" method="get">
              <input className="form-input" type="text" name="query" placeholder="Search this website" />
              <button className="btn btn-primary btn-outline-light ">Search</button>
            </form>
          </div>
        </nav>
        <marquee behavior="scroll" direction="left" scrollamount="5%" width="100%">
                    This is just a demo project and some error may occure
                </marquee>
        <div className="max-width-1 m-auto">
          <hr />
        </div>
        <div className="m-auto content max-width-1 my-2">
          <div className="content-left">
            <h1>Blog</h1><br />
            <p>Blog is a free website for to write blog who are intrested
              to write what they want and when they want to write and can get
              good audience to read the content.</p><br />
            <p>You can write and post anthing you write and post unless it doesn't
              violete aour guideline. If you violete your guideline thenyour account will be suspended
              and you will not be able to take back your account.</p>
          </div>
          <div className="content-right">
            <img src={img}/>
          </div>
        </div>
        <div className="max-width-1 m-auto">
          <hr />
        </div>
        <div className="home-articles max-width-1 m-auto font1">
          <h2>Featured Articles</h2>
          <div className="year-box adjust-year">
            <div>
              <h3>year</h3>
            </div>
            <div>
              <input type="radio" name="year" id="" />2020
            </div>
            <div>
              <input type="radio" name="year" id="" />2019
            </div>
          </div>
          <div className="home-article">
            <div className="home-article-img">
              <img src={img1} />
            </div>
            <div className="home-article-content font1">
              <a href="blog_post.html">
                <h3>Introduction to Anime</h3>
              </a>
              <div>Author Name</div>
              <span>21 January | 6 min read</span>
            </div>
          </div>
          <div className="home-article">
            <div className="home-article-img">
              <img src={img1} />
            </div>
            <div className="home-article-content font1">
              <a href="blog_post.html">
                <h3>Content name</h3>
              </a>
              <div>Author Name</div>
              <span>21 January | 6 min read</span>
            </div>
          </div>
          <div className="home-article">
            <div className="home-article-img">
              <img src={img1} />
            </div>
            <div className="home-article-content font1">
              <a href="blog_post.html">
                <h3>Content name</h3>
              </a>
              <div>Author Name</div>
              <span>21 January | 6 min read</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>copyright &copy;Blog.com</p>
          <a href="https://www.vecteezy.com/vector-art/4579247-blog-and-web-designer-and-seo-optimization">vector
            credits:vecteezy</a>
        </div>
      </Fragment>
    )
}

export default Home;