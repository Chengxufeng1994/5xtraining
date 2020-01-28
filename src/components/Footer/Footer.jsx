import React, { Component } from 'react';
import './Footer.css';
import data from '../../db/footer.json';

class Footer extends Component {
  componentDidMount() {
    const scrollToTop = document.getElementById('scrollToTop');
    scrollToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  render() {
    const footerData = data;
    return (
      <footer className="footer bg-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <a className="d-block mb-3 press-img" href="/#">
                <img src="https://5xruby.tw/assets/images/footer/press-img-3161693e.png" title="媒體報導" alt="媒體報導" />
              </a>
              <a className="d-block cakeresume press-img" href="/#" target="_blank">
                <img
                  src="https://5xruby.tw/assets/images/footer/cakeresume-8938f367.png"
                  title="CakeResume 找工作"
                  alt="CakeResume 找工作"
                  style={{ maxWidth: '180px', marginBottom: '10px', paddingRight: '6px' }}
                />
                <span className="text-muted">找工作</span>
              </a>
            </div>
            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-12 mt-3 mt-md-0">
                  <div className="footer-nav">
                    {footerData.links.map((item) => (
                      <h5 key={item.id}><a href={item.href}>{item.title}</a></h5>
                    ))}
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="row">
                    <div className="col-12 col-md-4 col-xl-3">
                      <div className="contact-info">
                        <strong className="large text-danger">{footerData.phone}</strong>
                        <br />
                        <small>{footerData.openTime}</small>
                        <br />
                        <a href="https://www.facebook.com/5xruby" target="_blank" rel="noopener noreferrer" aria-label="facebook"><i className="social-icon fab fa-facebook-f" /></a>
                        <a href="https://twitter.com/5xruby" target="_blank" rel="noopener noreferrer" aria-label="twitter"><i className="social-icon fab fa-twitter" /></a>
                        <a href="https://github.com/5xruby" target="_blank" rel="noopener noreferrer" aria-label="github"><i className="social-icon fab fa-github" /></a>
                      </div>
                    </div>
                    <div className="col-12 col-md-8 col-xl-9 mt-0 mt-md-0">
                      <div className="mail-address">
                        <p>{footerData.question}</p>
                        <a href="mailto:hi@5xruby.tw">{footerData.email}</a>
                        <br />
                        <p>
                          地址：
                          <a target="_blank" href="https://goo.gl/lz5v93" rel="noopener noreferrer">
                            {footerData.address}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-info text-center">
                <p>{footerData.copyright1}</p>
                <p>{footerData.copyright2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-scrollToTop text-center" id="scrollToTop">
          <i className="fa fa-angle-up" />
        </div>
      </footer>
    );
  }
}

export default Footer;
