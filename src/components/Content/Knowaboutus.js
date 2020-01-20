import React, { Component } from 'react';
import './Knowaboutus.css';

class Knowaboutus extends Component {
    render() {
        return (
            <section className="knowaboutus">
                <div className="container pb-5 mb-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center mt-3 mb-2">想更瞭解我們嗎？</h3>
                            <p className="text-center mb-4 mt-4">
                                您可以看看<a className="text-red" href="/#">常見問題</a>或者直接<a className="text-red" href="/contacts">線上洽詢</a>，會有親切的客服人員回答您的問題，
                                <br />
                                也可以透過社群網站隨時關注我們的動態。
                            </p>
                            <div className="btns text-center">
                                <a href="/#" className="d-inline-block mx-4">
                                    <img src="https://5xruby.tw/assets/images/index/icon/icon-fb-2f24e7a0.png" alt="facebook icon" />
                                </a>
                                <a href="/#" className="d-inline-block mx-4">
                                    <img src="https://5xruby.tw/assets/images/index/icon/icon-twitter-89f8d087.png" alt="twitter icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Knowaboutus