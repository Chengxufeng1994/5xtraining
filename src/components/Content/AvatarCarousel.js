import React, { Component } from 'react';
import './AvatarCarousel.css'

class AvatarCarousel extends Component {
    render() {
        return (
            <section className="avatar-carousel bg-light pb-5">
                <h3 class="section-title text-center mb-4 pt-5 pb-4">
                    <span>網頁課程推薦</span>
                </h3>
                <div id="avatar-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators pr-0">
                        <li data-target="#avatar-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#avatar-carousel" data-slide-to="1" ></li>
                        <li data-target="#avatar-carousel" data-slide-to="2" ></li>
                        <li data-target="#avatar-carousel" data-slide-to="3" ></li>
                        <li data-target="#avatar-carousel" data-slide-to="4" ></li>
                        <li data-target="#avatar-carousel" data-slide-to="5" ></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="container mt-5">
                            <div className="carousel-item active" data-interval="5000">
                                <div className="d-flex flex-nowrap mx-auto justify-content-center">
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                                        <img src="https://5xruby.tw/assets/images/testimoney/avatar/victor-3ec52916.jpg" className="d-block" alt="程式課程推薦 | Victor Lam | 五倍紅寶石" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                                        <p className="d-block statement">
                                            Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。
                                            <br />
                                            <span className="d-block text-red large mt-3">Victor Lam</span>
                                            <span className="d-block text-grey">連續創業家，自由工作者</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="5000">
                                <div className="d-flex flex-nowrap mx-auto justify-content-center">
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                                        <img src="https://5xruby.tw/assets/images/testimoney/avatar/jason-e7e95cad.jpg" className="d-block" alt="程式課程推薦 | Victor Lam | 五倍紅寶石" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                        <p className="d-block statement">
                                            Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.                                            <br />
                                            <span className="d-block text-red large mt-3">Jason Hs</span>
                                            <span className="d-block text-grey">founder of The Big Questions & TEDxTaipei</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="5000">
                                <div className="d-flex flex-nowrap mx-auto justify-content-center">
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                                        <img src="https://5xruby.tw/assets/images/testimoney/avatar/felix-d1d4db69.jpg" className="d-block" alt="程式課程推薦 | Victor Lam | 五倍紅寶石" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                        <p className="d-block statement">
                                            還在尋找專業的 Ruby/Rails 師資嗎？別懷疑了，台灣最頂尖的 Rubyist 盡在「五倍紅寶石」！                                            <br />
                                            <span className="d-block text-red large mt-3">Felix Lin</span>
                                            <span className="d-block text-grey">dappei.com 「搭配」網站創辦人</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="5000">
                                <div className="d-flex flex-nowrap mx-auto justify-content-center">
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                                        <img src="https://5xruby.tw/assets/images/testimoney/avatar/hana-4ae009cb.jpg" className="d-block" alt="程式課程推薦 | Victor Lam | 五倍紅寶石" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                        <p className="d-block statement">
                                            慕凡和龍哥是業界數一數二的 Ruby 大師，他們不光是底子深厚，也很懂得引導、訓練學習路上遇到挫折的 Ruby/Rails 學子。很慶幸有他們的協助讓我進入紅寶石的美妙世界。                                            <br />
                                            <span className="d-block text-red large mt-3">Hana Chang</span>
                                            <span className="d-block text-grey">Co-Founder and CEO of BountyHunter</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="5000">
                                <div className="d-flex flex-nowrap mx-auto justify-content-center">
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                                        <img src="https://5xruby.tw/assets/images/testimoney/avatar/johnsie-7322ca81.jpg" className="d-block" alt="程式課程推薦 | Victor Lam | 五倍紅寶石" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                        <p className="d-block statement">
                                            選擇程式語言很重要，但選擇優秀的導師更重要！能跟擁有多年 Ruby/Rails 實戰經驗、活躍於社群的頂尖 Rubyist 學習，將一窺程式開發殿堂之藝術！我堅信：專業事讓專業的來，而專業的「五倍紅寶石」是寶藏，就等大家來挖掘。                                            <br />
                                            <span className="d-block text-red large mt-3">John Sie</span>
                                            <span className="d-block text-grey">Accuvally Inc.共同創辦人暨營運長</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="5000">
                                <div className="d-flex flex-nowrap mx-auto justify-content-center">
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                                        <img src="https://5xruby.tw/assets/images/testimoney/avatar/benlin-54e253f4.jpg" className="d-block" alt="程式課程推薦 | Victor Lam | 五倍紅寶石" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                        <p className="d-block statement">
                                            「五倍紅寶石」的導師們都是業界經驗豐富的實戰高手，提供的課程及咨詢絕對能讓你大幅省去自行摸索的時間。                                            <br />
                                            <span className="d-block text-red large mt-3">Ben Li</span>
                                            <span className="d-block text-grey">連續創業家，自由工作者</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        )
    }
}

export default AvatarCarousel;