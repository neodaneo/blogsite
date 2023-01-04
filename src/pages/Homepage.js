import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    

    <main className="main">
      <section
        className="section hero"
        style={{backgroundImage: 'url(./media/hero.jpg)'}}
      >
        <h1 className="hero__title">
          Read What You Want! <br />
          Read What You Love
        </h1>
        <form className="hero__form" action="">
          <div className="form-group">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <button
              className="button"
              style={{paddingTop: '1rem', paddingBottom: '1rem'}}
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>

      <section className="section content container">
        <div className="content__container">
        <div className="content__category">
            <h2 className="content__category-title">Forum</h2>
            <ul className="content__category-list">
              <li className="list-item">
                <a href="#html" className="link-item">Share</a>
              </li>
              <li className="list-item">
                <a href="#css" className="link-item">Show Titles</a>
              </li>
              
            </ul>
          </div>
          <div className="content__blogs">
            <article className="content__blog-item">
              <div className="content__img-container">
                <img
                  src="./media/blog1.jpg"
                  alt=""
                  className="content__img"
                />
                <Link to="/post/1" className="button content__blog-buttton">
                  <i className="bx bx-right-arrow-alt button-arrow"></i>
                </Link>
              </div>
              <h4 className="content__blog-title">Title</h4>
              <p className="content__blog-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                maiores cum, quas omnis sequi accusantium?
              </p>
            </article>
            <article className="content__blog-item">
              <div className="content__img-container">
                <img
                  src="./media/blog2.jpg"
                  alt=""
                  className="content__img"
                />
                <Link to="/post/2" className="button content__blog-buttton">
                  <i className="bx bx-right-arrow-alt button-arrow"></i>
                </Link>
              </div>
              <h4 className="content__blog-title">Title</h4>
              <p className="content__blog-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                maiores cum, quas omnis sequi accusantium?
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>


  )
}

export default Homepage