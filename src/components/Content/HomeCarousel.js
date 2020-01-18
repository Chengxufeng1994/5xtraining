import React, { Component } from 'react';
import './HomeCarousel.css'

class HomeCarousel extends Component {
    render() {
        return (
            <section id="home-carousel">
                <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="5000">
                            <a href="https://astro.5xruby.tw/" target="_blank" rel="noopener noreferrer" >
                                <picture>
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_astro/small-0a0f4727.jpg" media="(max-width: 400px)" />
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_astro/medium-68da60f6.jpg" media="(max-width: 768px)" />
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_astro/large-a839be5c.jpg" media="(min-width: 1920px)" />
                                    <img className="d-block w-100" src="https://5xruby.tw/assets/images/index/banner_astro-a839be5c.jpg" alt="轉職前後端軟體工程師課程 | ASTRO | 五倍紅寶石" />
                                </picture>
                            </a>
                        </div>
                        <div className="carousel-item" data-interval="5000">
                            <a href="https://iamcoding.tw/" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_imcodingit/small-084bbe8e.jpg" media="(max-width: 400px)" />
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_imcodingit/medium-ac7b6c1c.jpg" media="(max-width: 768px)" />
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_imcodingit/large-522226cd.jpg" media="(min-width: 1920px)" />
                                    <img className="d-block w-100" src="https://5xruby.tw/assets/images/index/banner_astro-a839be5c.jpg" alt="轉職前後端軟體工程師課程 | ASTRO | 五倍紅寶石" />
                                </picture>
                            </a>
                        </div>
                        <div className="carousel-item" data-interval="5000">
                            <a href="https://www.facebook.com/rubymokumokukai/" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_mokumokukai/small-55384ddb.jpg" media="(max-width: 400px)" />
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_mokumokukai/medium-7e04c28f.jpg" media="(max-width: 768px)" />
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_mokumokukai/large-624d5776.jpg" media="(min-width: 1920px)" />
                                    <img className="d-block w-100" src="https://5xruby.tw/assets/images/index/banner_mokumokukai-f9ec6b54.jpg" alt="工程師社群默默會 | 工程師交流討論 | 五倍紅寶石" />
                                </picture>
                            </a>
                        </div>
                        <div className="carousel-item" data-interval="5000">
                            <a href="/about" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_5xruby/small-f0f041dc.jpg" media="(max-width: 400px)" />
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_5xruby/medium-31d58562.jpg" media="(max-width: 768px)" />
                                    <source srcset="https://5xruby.tw/assets/images/index/banner_5xruby/large-8a833869.jpg" media="(min-width: 1920px)" />
                                    <img className="d-block w-100" src="https://5xruby.tw/assets/images/index/banner_5xruby-3d66d288.jpg" alt="五倍紅寶石網頁開發 | 網頁設計課程以及開發推薦 | 五倍紅寶石" />
                                </picture>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeCarousel;