import React from 'react';
import './Footer.scss';
import './Social.scss';

const Footer = () => {
  return(
    <div className="footer">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" className="social-logo">
              ostimeline
            </a>
          </div>
          <small className="website-rights">© 2020 Yury Soiko</small>
          <div className="social-icons">
            <a
              className="social-icon-link vk"
              href={"//vk.com/id56289661"}
              target="_blank"
              aria-label='Vk'
            >
              <i className='fab fa-vk' />
            </a>
            <a
              className="social-icon-link instagram"
              href={"//www.instagram.com/yura_soiko/"}
              target="_blank"
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className="social-icon-link telegram"
              href={"//t.me/plexers"}
              target="_blank"
              aria-label='Telegram'
            >
              <i className='fab fa-telegram' />
            </a>
            <a
              className="social-icon-link email"
              href={"//mailto:puma10009@gmail.com"}
              target="_blank"
              aria-label='Email'
            >
              <i className='fas fa-envelope' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;