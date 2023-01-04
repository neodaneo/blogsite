import React from 'react'
import {Link} from 'react-router-dom'

function Detail() {
  return (
    <main className="main">
      <section
        className="section hero__detail"
        style={{backgroundImage: 'url(../media/bg-detail.jpg)'}}
      >
        <h1 className="hero__title">Write Your Dream</h1>
      </section>
      <section className="section detail__post container">
        <div className="detail__post-reading">
          <div className="detail__post-profile">
            <img
              className="detail__post-img"
              src="../media/profile.png"
              alt=""
            />
            <div>
              <h6 className="detail__post-title">Unknown</h6>
              <span className="detail__post-date">posted 2 days ago</span>
            </div>
            <div className="detail__post-update">
              <i className="bx bx-pencil btn-edit"></i>
              <i className="bx bx-trash-alt btn-trash"></i>
            </div>
            <div className="detail__post-social">
            <a href='https://twitter.com/home'><i className="bx bxl-twitter"></i></a>
            <a href='https://www.facebook.com/'><i className="bx bxl-facebook"></i></a>
              <a href='https://tr.linkedin.com/'><i className="bx bxl-linkedin-square"></i></a>
            </div>
          </div>
          <div className="detail__post-content">
            <p className="detail__post-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              itaque id voluptatum quidem aperiam laborum veniam inventore
              doloribus minus a nostrum quibusdam earum error exercitationem
              excepturi est ex debitis quas laboriosam non, doloremque
              aspernatur. Aut itaque ipsa facilis officiis perferendis?
              Laboriosam architecto voluptatibus esse voluptatum dolores
              pariatur vitae voluptas reiciendis blanditiis. Officiis, velit?
              Repellendus dolorem placeat, commodi optio ipsam eveniet porro
              consequatur, quod dolore laboriosam, at voluptatibus dicta
              assumenda? Aut aperiam est sed cum voluptatum, itaque facere amet
              nisi non! Veritatis nesciunt eius, fugiat esse laboriosam
              voluptatem? Neque error, molestiae vel voluptatem laudantium eaque
              obcaecati quis temporibus, ad, placeat sequi!
            </p>
            <p className="detail__post-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              itaque id voluptatum quidem aperiam laborum veniam inventore
              doloribus minus a nostrum quibusdam earum error exercitationem
              excepturi est ex debitis quas laboriosam non, doloremque
              aspernatur. Aut itaque ipsa facilis officiis perferendis?
              Laboriosam architecto voluptatibus esse voluptatum dolores
              pariatur vitae voluptas reiciendis blanditiis. Officiis, velit?
              Repellendus dolorem placeat, commodi optio ipsam eveniet porro
              consequatur, quod dolore laboriosam, at voluptatibus dicta
              assumenda? Aut aperiam est sed cum voluptatum, itaque facere amet
              nisi non! Veritatis nesciunt eius, fugiat esse laboriosam
              voluptatem? Neque error, molestiae vel voluptatem laudantium eaque
              obcaecati quis temporibus, ad, placeat sequi!
            </p>
          </div>
        </div>
        <div className="detail__post-recomend">
          <h3 className="detail__post-recomend-title">Popular Reading</h3>
          <article className="content__blog-item detail__post-recomend-content">
            <div className="content__img-container">
              <img src="../assets/media/blog1.jpg" alt="" className="content__img" />
              <Link to="/post/1" className="button content__blog-buttton">
                <i className="bx bx-right-arrow-alt button-arrow"></i>
              </Link>
            </div>
            <h4 className="content__blog-title">Title</h4>
          </article>
          <article className="content__blog-item detail__post-recomend-content">
            <div className="content__img-container">
              <img src="../assets/media/blog2.jpg" alt="" className="content__img" />
              <Link to="/post/3" className="button content__blog-buttton">
                <i className="bx bx-right-arrow-alt button-arrow"></i>
              </Link>
            </div>
            <h4 className="content__blog-title">Title</h4>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Detail