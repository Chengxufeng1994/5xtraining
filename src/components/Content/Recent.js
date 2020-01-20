import React, { Component } from 'react';
import './Recent.css'

class Recent extends Component {
    render() {
        return (
            <section className="recent">
                <div className="container">
                    <div className="row">
                        <div className="col-12 center-block pb-3">
                            <h3 className="section-title text-center my-5 pb-4">
                                熱門網頁設計課程推薦
                            </h3>
                            <div className="d-flex flex-wrap pb-5 lecture-list">
                                <div className="col-sm-12 col-md-6 col-lg-4 mb-4 lecture-item">
                                    <a href="/#">
                                        <div className="lecture-wrap">
                                            <img src="https://5xruby.tw/assets/images/talks/cover/ruby-on-rails-7c597107.jpg" alt="Ruby on Rails 實戰課程 - 假日班" />
                                            <h4 className="font-weight-bold mt-2 pb-1 rl-padding">Ruby on Rails 實戰課程 - 假日班</h4>
                                            <div className="rl-padding bottom-padding">
                                                <span className="yellow-tag small">已確定開課</span><span className="text-muted small">2019-12-07</span>
                                                <p className="description mt-3 mb-3">
                                                    後臺開發不是夢！實戰程度百分百的 <strong>Ruby & Rails 課程 </strong>。
                                                    具備高度生產力，簡潔、有效率的編寫，即便是初學者也能快速上手的<strong>Ruby 程式語言 </strong>，
                                                    搭配 <strong>Rails</strong> 框架，短時間內部署自己的專案。
                                                    從電商網站到金流平台串接， 5 天課程帶您走過專案流程，熟悉整體架構。
                                                </p>
                                                <p className="text-muted mb-3 small" >講者： 高見龍 (Eddie Kao)  | 時數： 30 小時</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 mb-4 lecture-item">
                                    <a href="/#">
                                        <div className="lecture-wrap">
                                            <img src="https://5xruby.tw/assets/images/talks/cover/functional-09be0f61.jpg" alt="工作上用得到的函數式程式設計：從觀念到實務 - 假日班" />
                                            <h4 className="font-weight-bold mt-2 pb-1 rl-padding">工作上用得到的函數式程式設計：從觀念到實務 - 假日班</h4>
                                            <div className="rl-padding bottom-padding">
                                                <span className="text-muted small">2020-02-22</span>
                                                <p className="description mt-3 mb-3">
                                                    隨著多核心電腦成為主流、分散式系統架構也成為顯學，
                                                    <strong>函數式程式設計</strong>的重要性也與日俱增。
                                                    跟物件導向程式設計相比，<strong>函數式程式設計</strong>著重於用<strong>更簡潔的方向表達程式碼</strong>真正的意圖。
                                                    因此當學會用與物件導向程式程計不同的角度來寫程式後，
                                                    可以讓你在切換不同的程式語言時依然能游刃有餘。
                                                    <br />
                                                    這門課將會透過一門好入手的非純函數式語言 Elixir 開始，
                                                    教大家最重要的<strong>函數式程式設計</strong>觀念。
                                                    接著介紹如何在 Ruby、JavaScript (也許還有一點 C#) 上使用<strong>函數式程式設計</strong>的技巧。
                                                    讓你寫出<strong>精簡、好除錯</strong>的厲害程式碼！
                                                </p>
                                                <p className="text-muted mb-3 small" >講者： 蘇泰安 (Taian Su)  | 時數： 9 小時</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 mb-4 lecture-item">
                                    <a href="/#">
                                        <div className="lecture-wrap">
                                            <img src="https://5xruby.tw/assets/images/talks/cover/rwd-99b9e59b.jpg" alt="客製化進階 RWD 手機版網頁設計班 - 假日班" />
                                            <h4 className="font-weight-bold mt-2 pb-1 rl-padding">客製化進階 RWD 手機版網頁設計班 - 假日班</h4>
                                            <div className="rl-padding bottom-padding">
                                                <span className="text-muted small">2020-02-22</span>
                                                <p className="description mt-3 mb-3">
                                                    你還在困擾網頁該怎麼做 <strong>RWD</strong> 嗎？講師手把手教學，帶你快速上手 <strong>RWD</strong>，
                                                    不僅教你技術及方法，還要建立你正確的網頁觀念，融會貫通後你將大幅提高自學能力，
                                                    降低卡關浪費時間查找的困擾！
                                                </p>
                                                <p className="text-muted mb-3 small" >講者： 李建杭 (Amos Lee)  | 時數： 24 小時</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col text-center mt-4">
                                    <a href="/#" className="btn btn-red btn-padding">看更多網頁課程</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Recent