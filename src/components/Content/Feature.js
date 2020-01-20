import React, { Component } from 'react';
import './Feature.css'

class Feature extends Component {
    render() {
        return (
            <section className="feature bg-light pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 center-block pb-3">
                            <h3 className="section-title text-center my-5 pb-4">
                                關於五倍紅寶石 About 5xRuby
                            </h3>
                            <div className="d-flex feature-list flex-wrap text-center">
                                <div className="col-sm-12 col-md-3">
                                    <a href="/#">
                                        <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img1-0d20ab19.png" alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                                        <h3 className="pt-3">網頁設計
                                            <br />
                                            前後端課程教學
                                        </h3>
                                        <p className="pt-3 pb-3">
                                            帶你掌握<strong>程式技能轉職工程師</strong>，
                                            <strong>程式課程</strong>從入門到進階讓你快速上手，
                                            學員好評推薦<strong>轉職課程</strong>!
                                        </p>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <a href="/#">
                                        <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img2-26e4ca80.png" alt="頂尖技術網頁製作、專案開發 | 五倍紅寶石" />
                                        <h3 className="pt-3">
                                            網頁設計
                                            <br />
                                            前後端課程教學
                                        </h3>
                                        <p className="pt-3 pb-3">
                                            <strong>網站開發</strong>到行動裝置 App 工程服務、
                                            系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。
                                        </p>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <a href="/#">
                                        <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img3-d0a4089e.png" alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                                        <h3 className="pt-3">
                                            頂尖技術
                                            <br />
                                            網頁製作、專案開發
                                        </h3>
                                        <p className="pt-3 pb-3">
                                            帶你掌握<strong>程式技能轉職工程師</strong>，
                                            <strong>程式課程</strong>從入門到進階讓你快速上手，
                                            學員好評推薦<strong>轉職課程</strong>!
                                        </p>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <a href="/#">
                                        <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img4-13321bf0.png" alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                                        <h3 className="pt-3">網頁設計
                                            <br />
                                            前後端課程教學
                                        </h3>
                                        <p className="pt-3 pb-3">
                                            帶你掌握<strong>程式技能轉職工程師</strong>，
                                            <strong>程式課程</strong>從入門到進階讓你快速上手，
                                            學員好評推薦<strong>轉職課程</strong>!
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature