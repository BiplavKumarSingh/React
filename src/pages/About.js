import { Link } from "react-router-dom";
import { Fragment } from "react";
import { FaBlogger } from "react-icons/fa";
import './../assets/css/blog_post.css';
import './../assets/css/Style.css';
import './../assets/css/utils.css';
import './../assets/css/mobile.css';
import img1 from './../025.svg';
function About() {
  return (
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
              <Link to='/Contact'>contact</Link>
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
      <div class="max-width-1 m-auto">
        <hr />
      </div>
      <div class="post-img">
      <img src={img1} />
      </div>
      <div class="m-auto Blog-post-content max-width-2 m-auto my-2">
        <h1 class="font1">Anime</h1><br />
        <div class="blogpost-meta">
            <div class="author-info">
                <div>
                    <b>
                        By Biplav
                    </b>
                </div>
                <div>04 February. 6 min read</div>
            </div>
            <div class="social">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20 5.34c-.67.41-1.4.7-2.18.87a3.45 3.45 0 0 0-5.02-.1 3.49 3.49 0 0 0-1.02 2.47c0 .28.03.54.07.8a9.91 9.91 0 0 1-7.17-3.66 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44V10c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06a3.5 3.5 0 0 0 3.24 2.43 7.34 7.34 0 0 1-4.36 1.49l-.81-.05a9.96 9.96 0 0 0 5.36 1.56c6.4 0 9.91-5.32 9.9-9.9v-.5c.69-.49 1.28-1.1 1.74-1.81-.63.3-1.3.48-2 .56A3.33 3.33 0 0 0 20 5.33"
                        fill="#A8A8A8"></path>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M19.75 12.04c0-4.3-3.47-7.79-7.75-7.79a7.77 7.77 0 0 0-5.9 12.84 7.77 7.77 0 0 0 4.69 2.63v-5.49h-1.9v-2.2h1.9v-1.62c0-1.88 1.14-2.9 2.8-2.9.8 0 1.49.06 1.69.08v1.97h-1.15c-.91 0-1.1.43-1.1 1.07v1.4h2.17l-.28 2.2h-1.88v5.52a7.77 7.77 0 0 0 6.7-7.71"
                        fill="#A8A8A8"></path>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.57 14.67c0-.57.13-1.11.38-1.6l.02-.02v-.02l.02-.02c0-.02 0-.02.02-.02.12-.26.3-.52.57-.8L7.78 9v-.02l.01-.02c.44-.41.91-.7 1.44-.85a4.87 4.87 0 0 0-1.19 2.36A5.04 5.04 0 0 0 8 11.6L6.04 13.6c-.19.19-.32.4-.38.65a2 2 0 0 0 0 .9c.08.2.2.4.38.57l1.29 1.31c.27.28.62.42 1.03.42.42 0 .78-.14 1.06-.42l1.23-1.25.79-.78 1.15-1.16c.08-.09.19-.22.28-.4.1-.2.15-.42.15-.67 0-.16-.02-.3-.06-.45l-.02-.02v-.02l-.07-.14s0-.03-.04-.06l-.06-.13-.02-.02c0-.02 0-.03-.02-.05a.6.6 0 0 0-.14-.16l-.48-.5c0-.04.02-.1.04-.15l.06-.12 1.17-1.14.09-.09.56.57c.02.04.08.1.16.18l.05.04.03.06.04.05.03.04.04.06.1.14.02.02c0 .02.01.03.03.04l.1.2v.02c.1.16.2.38.3.68a1 1 0 0 1 .04.25 3.2 3.2 0 0 1 .02 1.33 3.49 3.49 0 0 1-.95 1.87l-.66.67-.97.97-1.56 1.57a3.4 3.4 0 0 1-2.47 1.02c-.97 0-1.8-.34-2.49-1.03l-1.3-1.3a3.55 3.55 0 0 1-1-2.51v-.01h-.02v.02zm5.39-3.43c0-.19.02-.4.07-.63.13-.74.44-1.37.95-1.87l.66-.67.97-.98 1.56-1.56c.68-.69 1.5-1.03 2.47-1.03.97 0 1.8.34 2.48 1.02l1.3 1.32a3.48 3.48 0 0 1 1 2.48c0 .58-.11 1.11-.37 1.6l-.02.02v.02l-.02.04c-.14.27-.35.54-.6.8L16.23 15l-.01.02-.01.02c-.44.42-.92.7-1.43.83a4.55 4.55 0 0 0 1.23-3.52L18 10.38c.18-.21.3-.42.35-.65a2.03 2.03 0 0 0-.01-.9 1.96 1.96 0 0 0-.36-.58l-1.3-1.3a1.49 1.49 0 0 0-1.06-.42c-.42 0-.77.14-1.06.4l-1.2 1.27-.8.8-1.16 1.15c-.08.08-.18.21-.29.4a1.66 1.66 0 0 0-.08 1.12l.02.03v.02l.06.14s.01.03.05.06l.06.13.02.02.01.02.01.02c.05.08.1.13.14.16l.47.5c0 .04-.02.09-.04.15l-.06.12-1.15 1.15-.1.08-.56-.56a2.3 2.3 0 0 0-.18-.19c-.02-.01-.02-.03-.02-.04l-.02-.02a.37.37 0 0 1-.1-.12c-.03-.03-.05-.04-.05-.06l-.1-.15-.02-.02-.02-.04-.08-.17v-.02a5.1 5.1 0 0 1-.28-.69 1.03 1.03 0 0 1-.04-.26c-.06-.23-.1-.46-.1-.7v.01z"
                        fill="#A8A8A8"></path>
                </svg>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="tp"
                    aria-label="Add to list bookmark button">
                    <path
                        d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                        fill="#292929"></path>
                </svg>

            </div>
        </div>
        <p class="font2">Anime is a Japanese term for hand-drawn or computer animation.<br/>The word is the abbreviated
            pronunciation of "animation" in Japanese, where this term references<br/>
            all animation. Outside Japan, anime is used to refer specifically to animation from Japan or as a
            Japanese-disseminated animation style.<br/>
            Anime consists of an ideal story-telling mechanism, combining graphic art,<br/> characterization,
            cinematography, and other forms of imaginative and individualistic techniques.<br/>
            The production of anime focuses less on the animation of movement and more on the<br/> realism of settings as
            well as the use of camera effects, including panning, zooming, and angle shots.<br/>
            Being hand-drawn, anime is separated from reality by a crucial gap of fiction that provides an ideal path
            for escapism that audiences can immerse themselves into with relative ease.
        </p>
    </div>
          <div class="max-width-1 m-auto">
            <hr/>
          </div>
          <div class="home-articles max-width-1 m-auto font1">
            <h2>People who read this also read</h2>
            <div class="rowi">
              <div class="home-article more">
                <div class="home-article-img">
                <img src={img1} />
                </div>
                <div class="home-article-content font1 center">
                  <a href="blog_post.html.html">
                    <h3>Intoduction to Anime</h3>
                  </a>
                  <div>Author Name</div>
                  <span>21 January | 6 min read</span>
                </div>
              </div>
              <div class="home-article more">
                <div class="home-article-img">
                <img src={img1} />
                </div>
                <div class="home-article-content font1 center">
                  <a href="blog_post.html.html">
                    <h3>Content name</h3>
                  </a>
                  <div>Author Name</div>
                  <span>21 January | 6 min read</span>
                </div>
              </div>
              <div class="home-article more">
                <div class="home-article-img">
                <img src={img1} />
                </div>
                <div class="home-article-content font1 center">
                  <a href="blog_post.html.html">
                    <h3>Content name</h3>
                  </a>
                  <div>Author Name</div>
                  <span>21 January | 6 min read</span>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <p>copyright &copy;Blog.com</p>
            <a href="https://www.vecteezy.com/vector-art/4579247-blog-and-web-designer-and-seo-optimization">vector
              credits:vecteezy</a>
          </div>
        </Fragment>
        )
}

        export default About;