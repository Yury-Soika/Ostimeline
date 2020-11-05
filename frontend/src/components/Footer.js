import React from 'react';
import { Button } from './Button';
import './Footer.scss';
import './Social.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <div className="footer">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              ostimeline
            </Link>
          </div>
          <small className="website-rights">© 2020 Yury Soiko</small>
          <div className="social-icons">
            <Link
              className="social-icon-link vk"
              to={"//vk.com/id56289661"}
              target="_blank"
              aria-label='Vk'
            >
              <i className='fab fa-vk' />
            </Link>
            <Link
              className="social-icon-link instagram"
              to={"//www.instagram.com/yura_soiko/"}
              target="_blank"
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className="social-icon-link telegram"
              to={"//t.me/plexers"}
              target="_blank"
              aria-label='Telegram'
            >
              <i className='fab fa-telegram' />
            </Link>
            <Link
              className="social-icon-link email"
              to={"//mailto:puma10009@gmail.com"}
              target="_blank"
              aria-label='Email'
            >
              <i className='fas fa-envelope' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;