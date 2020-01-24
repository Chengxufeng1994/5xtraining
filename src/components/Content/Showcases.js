import React, { Component } from 'react';
import './Showcases.css'

class Showcases extends Component {
    showCasesItem() {
        const showCasesData = this.props.showCasesData
        const showCasesList = showCasesData.cards.map((item, index) => {
            return (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4 pt-4 showcase-item">
                    <a href="/#">
                        <div className="lecture-wrap">
                            <img src={item.img} alt={item.title} />
                            <h4 className="rl-padding mt-3 mb-3">{item.title}</h4>
                            <div className="rl-padding">
                                <p className="description mb-5 text-left">{item.tcontent}</p>
                            </div>
                        </div>
                    </a>
                </div>
            )
        })
        return (
            <div className="col-12 center-block mt-5">
                <h3 className="section-title text-center mt-5 pb-4">
                    {showCasesData.title}
                </h3>
                <div className="d-flex flex-wrap showcases-list">
                    {showCasesList}
                </div>
                <div className="col-12 text-right mt-3">
                    <a className="text-red" href="/#">...更多案例</a>
                </div>
            </div>
        )
    }
    render() {
        return (
            <section className="showcases pb-4">
                <div className="container">
                    <div className="row">
                        {this.showCasesItem()}
                    </div>
                </div >
            </section >
        )
    }
}

export default Showcases;