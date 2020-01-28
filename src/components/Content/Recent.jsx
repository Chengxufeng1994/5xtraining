import React, { Component } from 'react';
import './Recent.css';

class Recent extends Component {
  recentItem() {
    const { recentData } = this.props;

    const recentList = recentData.cards.map((item, index) => (
      <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4 lecture-item">
        <a href="/#">
          <div className="lecture-wrap">
            <img src={item.img} alt={item.title} />
            <h4 className="font-weight-bold mt-2 pb-1 rl-padding">{item.title}</h4>
            <div className="rl-padding bottom-padding">
              {item.status ? <span className="yellow-tag small">{item.status}</span> : <span />}
              <span className="text-muted small">{item.date}</span>
              <p className="description mt-3 mb-3">{item.content}</p>
              <p className="text-muted mb-3 small">{item.author}</p>
            </div>
          </div>
        </a>
      </div>
    ));

    return (
      <div className="col-12 center-block pb-3">
        <h3 className="section-title text-center my-5 pb-4">
          {recentData.title}
        </h3>
        <div className="d-flex flex-wrap pb-5 lecture-list">
          {recentList}
          <div className="col text-center mt-4">
            <a href="/#" className="btn btn-red btn-padding">看更多網頁課程</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="recent">
        <div className="container">
          <div className="row">
            {this.recentItem()}
          </div>
        </div>
      </section>
    );
  }
}

export default Recent;
