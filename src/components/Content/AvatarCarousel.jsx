/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './AvatarCarousel.css';

class AvatarCarousel extends Component {
  avatarList() {
    const { avatarData } = this.props;

    return (
      avatarData.cards.map((item) => {
        const {
          id, img, alt, content, author, job,
        } = item;

        switch (id) {
          case 0:
            return (
              <div key={id} className="carousel-item active" data-interval="5000">
                <div className="d-flex flex-nowrap mx-auto justify-content-center">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                    <img src={img} className="d-block" alt={alt} />
                  </div>
                  <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                    <p className="d-block statement">
                      {content}
                      <br />
                      <span className="d-block text-red large mt-3">{author}</span>
                      <span className="d-block text-grey">{job}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          default:
            return (
              <div key={id} className="carousel-item" data-interval="5000">
                <div className="d-flex flex-nowrap mx-auto justify-content-center">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                    <img src={img} className="d-block" alt={alt} />
                  </div>
                  <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                    <p className="d-block statement">
                      {content}
                      <br />
                      <span className="d-block text-red large mt-3">{author}</span>
                      <span className="d-block text-grey">{job}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
        }
      })
    );
  }

  render() {
    return (
      <section className="avatar-carousel bg-light pb-5">
        <h3 className="section-title text-center mb-4 pt-5 pb-4">
          <span>網頁課程推薦</span>
        </h3>
        <div id="avatar-carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators pr-0">
            <li data-target="#avatar-carousel" data-slide-to="0" className="active" />
            <li data-target="#avatar-carousel" data-slide-to="1" />
            <li data-target="#avatar-carousel" data-slide-to="2" />
            <li data-target="#avatar-carousel" data-slide-to="3" />
            <li data-target="#avatar-carousel" data-slide-to="4" />
            <li data-target="#avatar-carousel" data-slide-to="5" />
          </ol>
          <div className="carousel-inner">
            <div className="container mt-5">
              {this.avatarList()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AvatarCarousel;
