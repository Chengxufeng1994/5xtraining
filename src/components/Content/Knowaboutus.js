import React, { Component } from 'react';
import './Knowaboutus.css';

class Knowaboutus extends Component {
    KnowaboutusContent() {
        const knowAboutUsData = this.props.knowAboutUsData;
        return (
            <div className="col-12">
                <h3 className="text-center mt-3 mb-2">{knowAboutUsData.title}</h3>
                <p className="text-center mb-4 mt-4">
                    您可以看看
                <a className="text-red" href="/#">常見問題</a>
                    或者直接
                <a className="text-red" href="/contacts">線上洽詢</a>
                    ，會有親切的客服人員回答您的問題，
                <br />
                    {knowAboutUsData.content}
                </p>
                <div className="btns text-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/5xruby" className="d-inline-block mx-4">
                        <img src={knowAboutUsData.fbIcon} alt="facebook icon" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/5xruby" className="d-inline-block mx-4">
                        <img src={knowAboutUsData.twitterIcon} alt="twitter icon" />
                    </a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="knowaboutus">
                <div className="container pb-5 mb-5">
                    <div className="row">
                        {this.KnowaboutusContent()}
                    </div>
                </div>
            </section >
        )
    }
}

export default Knowaboutus