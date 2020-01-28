/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './HomeCarousel.css';

class HomeCarousel extends Component {
  carouselList() {
    const { carouselData } = this.props;
    return (
      carouselData.map((item) => {
        switch (item.id) {
          case 0:
            return (
              <div key={item.id} className="carousel-item active" data-interval="5000">
                <a href="https://astro.5xruby.tw/" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source srcSet={item.sm} media="(max-width: 400px)" />
                    <source srcSet={item.md} media="(max-width: 768px)" />
                    <source srcSet={item.lg} media="(min-width: 1920px)" />
                    <img className="d-block w-100" src={item.default} alt={item.alt} />
                  </picture>
                </a>
              </div>
            );
          default:
            return (
              <div key={item.id} className="carousel-item" data-interval="5000">
                <a href="https://astro.5xruby.tw/" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source srcSet={item.sm} media="(max-width: 400px)" />
                    <source srcSet={item.md} media="(max-width: 768px)" />
                    <source srcSet={item.lg} media="(min-width: 1920px)" />
                    <img className="d-block w-100" src={item.default} alt={item.alt} />
                  </picture>
                </a>
              </div>
            );
        }
      })
    );
  }

  render() {
    return (
      <section className="home-carousel">
        <div id="home-carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#home-carousel" data-slide-to="0" className="active" />
            <li data-target="#home-carousel" data-slide-to="1" />
            <li data-target="#home-carousel" data-slide-to="2" />
            <li data-target="#home-carousel" data-slide-to="3" />
          </ol>
          <div className="carousel-inner">
            {this.carouselList()}
          </div>
        </div>
      </section>
    );
  }
}

export default HomeCarousel;
