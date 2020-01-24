import React, { Component } from 'react';
import './Carousel.css';

const data = [
    {
        "id": 0,
        "sm": "https://5xruby.tw/assets/images/index/banner_astro/small-0a0f4727.jpg",
        "md": "https://5xruby.tw/assets/images/index/banner_astro/medium-68da60f6.jpg",
        "lg": "https://5xruby.tw/assets/images/index/banner_astro/large-a839be5c.jpg",
        "default": "https://5xruby.tw/assets/images/index/banner_astro-a839be5c.jpg",
        "alt": "轉職前後端軟體工程師課程 | ASTRO | 五倍紅寶石"
    },
    {
        "id": 1,
        "sm": "https://5xruby.tw/assets/images/index/banner_imcodingit/small-084bbe8e.jpg",
        "md": "https://5xruby.tw/assets/images/index/banner_imcodingit/medium-ac7b6c1c.jpg",
        "lg": "https://5xruby.tw/assets/images/index/banner_imcodingit/large-522226cd.jpg",
        "default": "https://5xruby.tw/assets/images/index/banner_imcodingit-53a9a811.jpg",
        "alt": "轉職前後端工程師程式線上課程 | 微痛轉職工程師 | 五倍紅寶石"
    },
    {
        "id": 2,
        "sm": "https://5xruby.tw/assets/images/index/banner_mokumokukai/small-55384ddb.jpg",
        "md": "https://5xruby.tw/assets/images/index/banner_mokumokukai/medium-7e04c28f.jpg",
        "lg": "https://5xruby.tw/assets/images/index/banner_mokumokukai/large-624d5776.jpg",
        "default": "https://5xruby.tw/assets/images/index/banner_mokumokukai-f9ec6b54.jpg",
        "alt": "工程師社群默默會 | 工程師交流討論 | 五倍紅寶石"
    },
    {
        "id": 3,
        "sm": "https://5xruby.tw/assets/images/index/banner_5xruby/small-f0f041dc.jpg",
        "md": "https://5xruby.tw/assets/images/index/banner_5xruby/medium-31d58562.jpg",
        "lg": "https://5xruby.tw/assets/images/index/banner_5xruby/large-8a833869.jpg",
        "default": "https://5xruby.tw/assets/images/index/banner_5xruby-3d66d288.jpg",
        "alt": "五倍紅寶石網頁開發 | 網頁設計課程以及開發推薦 | 五倍紅寶石"
    }
]

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
        this.currentIndex = 0;
        this.pause = false;
    }

    componentDidMount() {
        var that = this
        this.timeout = setTimeout(function () {
            that.goTo('autoPlay')
        }, 5000);
    }

    componentDidUpdate() {
        var that = this
        if (this.pause === true) {
            clearInterval(this.timeout);
            this.pause = false;
        }
        this.timeout = setTimeout(function () {
            that.goTo('autoPlay')
        }, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    checkClass(index) {
        if (this.currentIndex === index) {
            return " enter-active "
        } else {
            return ""
        }
    }

    checkNextOrPrev(index) {
        if (index > this.state.nowIndex)
            this.nextPage(index, 'next');
        else
            this.nextPage(index, 'prev');
    }

    goTo = (direction) => {
        let index = 0
        switch (direction) {
            // 自動播放（5秒換頁一次）
            case 'autoPlay':
                index = this.currentIndex + 1;
                this.currentIndex = index >= data.length ? 0 : index;
                break;
            // 點下圓點按鈕可以跳到指定的 Slide
            default:
                this.currentIndex = direction;
                this.pause = true;
                break;
        }
        this.setState({
            slideIndex: this.currentIndex,
        });
    }

    mouseLeave() {
        var that = this
        this.timeout = setTimeout(function () {
            that.goTo('autoPlay')
        }, 5000);
    }

    render() {
        return (
            <div className="slideShow" onMouseEnter={() => clearInterval(this.timeout)} onMouseLeave={() => this.mouseLeave()}>
                <div className="slide-inner">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={"slide-item" + this.checkClass(index)}>
                                < a href="/#" >
                                    <source srcSet={item.sm}
                                        media="(max-width: 400px)" />
                                    <source srcSet={item.md}
                                        media="(max-width: 768px)" />
                                    <source srcSet={item.lg}
                                        media="(min-width: 1920px)" />
                                    <img src={item.default}
                                        alt={item.alt} />
                                </a>
                            </div>
                        )
                    })}
                </div >
                <ul className="slide-indicators">
                    {data.map((item, index) => {
                        return (
                            <li key={index}
                                className={this.state.slideIndex === index ? "active" : ""}
                                onClick={() => this.goTo(index)}></li>
                        )
                    })}
                </ul>
            </div >
        )
    }
}

export default Carousel;