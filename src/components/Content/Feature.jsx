import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
  featureList() {
    const { featureData } = this.props;
    const { title, cards } = featureData;

    const featureList = cards.map((item) => (
      <div key={item.id} className="col-sm-12 col-md-3">
        <a href="/#">
          <img src={item.img} alt={item.alt} />
          <h3 className="pt-3">
            {item.title}
            <br />
            {item.subTitle}
          </h3>
          <p className="pt-3 pb-3">
            {item.content}
          </p>
        </a>
      </div>
    ));

    return (
      <div className="col-12 center-block pb-3">
        <h3 className="section-title text-center my-5 pb-4">
          {title}
        </h3>
        <div className="d-flex feature-list flex-wrap text-center">
          {featureList}
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="feature bg-light pb-4">
        <div className="container">
          <div className="row">
            {this.featureList()}
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
