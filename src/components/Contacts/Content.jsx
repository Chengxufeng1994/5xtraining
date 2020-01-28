import React, { Component } from 'react';
import Modal from './Modal.jsx';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      theme: '',
      message: '',
      isFinish: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      isFinish: !prevState.isFinish,
    }));
  }

  render() {
    const {
      name, email, phone, theme, message,
    } = this.state;
    return (
      <>
        <div className="top-banner red-bg pt-3 pb-3 contacts">
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
                  <span style={{ verticalAlign: 'bottom', width: '130px', height: '28px' }}>
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
                        border: 'none', visibility: 'visible', width: '130px', height: '28px',
                      }}
                      className=""
                    />
                  </span>
                </div>
              </div>
              <div className="col-12 text-center text-white">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/"><span>首頁</span></a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/contacts"><span>聯絡我們</span></a>
                  </li>
                </ol>
                <h1 className="title mt-4 mb-3">
                  有任何問題嗎？馬上聯絡我們！
                </h1>
                <h3 className="text-center mb-2"> </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5 pb-5 contact-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 contact-info">
                <div className="col-12 mb-3">
                  <h3>五倍紅寶石股份有限公司</h3>
                  <address className="mb-0">10046 台北市中正區衡陽路 7 號 5 樓</address>
                </div>
                <div className="col-12 d-flex flex-wrap px-0">
                  <div className="col-12 col-md-6 mb-1 order-sm-1 order-md-0">
                    Tel：02-2331-5247
                    <br />
                    Mobile：0928-617-687
                    <br />
                    E-mail：
                    {' '}
                    <a className="mail" href="/">hi@5xruby.tw</a>
                  </div>
                  <div className="col-12 col-md-6 mb-3 order-sm-0 order-md-1">
                    Fax：02-2331-8717
                    <br />
                    統編：24536806
                  </div>
                </div>
                <div className="col-12 col-xl-10">
                  <iframe
                    title="googlemap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.753431544997!2d121.51151851561227!3d25.042440444105686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90b4bce8c97%3A0xa8402e622aa7b148!2z5LqU5YCN57SF5a-255-zIC0g57ay6aCB6Kit6KiI5pWZ5a2456iL5byP6Kit6KiI5pWZ6IKy5qmf5qeL!5e0!3m2!1szh-TW!2stw!4v1579165581877!5m2!1szh-TW!2stw"
                    width="100%"
                    height="450"
                    frameBorder="0"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 contact-form">
                <div className="mb-3">任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！</div>
                <form onSubmit={this.toggle}>
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="名字" required autoComplete="off" value={name} onChange={(event) => this.setState({ name: event.target.value })} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="信箱" required autoComplete="off" value={email} onChange={(event) => this.setState({ email: event.target.value })} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="phone" placeholder="電話" required autoComplete="off" value={phone} onChange={(event) => this.setState({ phone: event.target.value })} />
                  </div>
                  <div className="form-group">
                    <select className="form-control" required value={theme} onChange={(event) => this.setState({ theme: event.target.value })}>
                      <option value="">請選擇主題</option>
                      <option value="專案開發">專案開發</option>
                      <option value="技術諮詢">技術諮詢</option>
                      <option value="企業內訓">企業內訓</option>
                      <option value="課程詢問">課程詢問</option>
                      <option value="其他">其他</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="message" rows="3" placeholder="留下你的訊息" required autoComplete="off" value={message} onChange={(event) => this.setState({ message: event.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-block btn-red">送出</button>
                </form>
                {/* Modal */}
                <Modal
                  data={this.state}
                  toggle={this.toggle}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
