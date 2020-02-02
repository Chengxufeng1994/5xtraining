import React from 'react';
import './Posts.css';

const PostTitle = () => (
  <div className="top-banner red-bg pt-3 pb-3 posts">
    <div className="container">
      <div className="row">
        <div className="col-12 text-right">
          <div
            className="fb-like fb_iframe_widget"
            data-href="https://5xruby.tw/press"
            data-layout="button_count"
            data-size="large"
            data-action="like"
            data-share="true"
            fb-xfbml-state="rendered"
            fb-iframe-plugin-query="action=like&amp;app_id=511040962329986&amp;container_width=0&amp;href=https%3A%2F%2F5xruby.tw%2Fpress&amp;layout=button_count&amp;locale=zh_TW&amp;sdk=joey&amp;share=true&amp;size=large"
          >
            <span
              style={{
                verticalAlign: 'bottom',
                width: '130px',
                height: '28px'
              }}
            >
              <iframe
                name="f2da51b0375a99c"
                width="1000px"
                height="1000px"
                title="fb:like Facebook Social Plugin"
                frameBorder="0"
                allowTransparency="true"
                allowFullScreen
                scrolling="no"
                allow="encrypted-media"
                src="https://www.facebook.com/v2.0/plugins/like.php?action=like&amp;app_id=511040962329986&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D45%23cb%3Df17e99a4e700b0c%26domain%3D5xruby.tw%26origin%3Dhttps%253A%252F%252F5xruby.tw%252Ffe1793eaacf98%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2F5xruby.tw%2Fpress&amp;layout=button_count&amp;locale=zh_TW&amp;sdk=joey&amp;share=true&amp;size=large"
                style={{
                  border: 'none',
                  visibility: 'visible',
                  width: '130px',
                  height: '28px'
                }}
                className=""
              />
            </span>
          </div>
          <div className="col-12 text-center text-white">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">
                  <span>首頁</span>
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="/posts">
                  <span>最新消息</span>
                </a>
              </li>
            </ol>
            <h1 className="title mt-4 mb-3">最新消息</h1>
            <h3 className="text-center mb-2">
              關於五倍還有更多你可以發掘的，都在這邊說給你知！
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostTitle;
