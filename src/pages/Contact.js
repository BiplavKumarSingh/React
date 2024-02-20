import { Fragment } from "react";
import './../assets/css/contact.css'
import { Link } from "react-router-dom";
import { FaBlogger } from "react-icons/fa";
import './../assets/css/utils.css';

function Contact() {
    return (

        <Fragment>
            <nav class="navigation max-width-1 m-auto">
                <div class="nav-left">
                <Link to={'/'}><FaBlogger size={60} /></Link>
                    
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>blog_post</Link>
                        </li>

                    </ul>
                </div>
                <div class="nav-right">
                    <form action="search.html" method="get">
                        <input class="form-input" type="text" name="query" placeholder="Search this website" />
                        <button class="btn">Search</button>
                    </form>
                </div>
            </nav>
            <marquee behavior="scroll" direction="left" scrollamount="5%" width="100%">
                    This is just a demo project and some error may occure
                </marquee>
            <div class="max-width-1 m-auto">
                <hr />
            </div>
            <div class="contact-content font1 max-width-1 m-auto">
                <div class="max-width-1 m-auto mx-1">
                    <h2>Feel free to contact us for any querys or troubles in the website</h2>
                    <div class="contact-form">
                        <div class="form-box">
                            <input type="text" placeholder="Enter Your Name" />
                        </div>
                        <div class="form-box">
                            <input type="text" placeholder="Enter Your Phone Number" />
                        </div>
                        <div class="form-box">
                            <input type="text" placeholder="Enter Your Email ID" />
                        </div>
                        <div class="form-box">
                            <textarea name="" id="" cols="30" rows="10" placeholder="How may we help you"></textarea>
                        </div>
                        <div class="form-box">
                            <button class="btn">submit</button>
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

export default Contact;