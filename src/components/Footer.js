import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/Logo_w_text_white.png';
import facebook from '../img/social/facebook.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <a href="/">
            <img
              src={logo}
              alt="Sojourn"
              style={{ width: '24em', height: 'auto' }}
            />
          </a>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns" style={{ maxWidth: '100vw' }}>
              <div className="column">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact/Forms
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/volunteers">
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/directions">
                        Directions
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/donate">
                        Donate
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/horses">
                        Horses
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/calendar">
                        Calendar
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column social">
                <a
                  title="facebook"
                  href="https://www.facebook.com/SojournTherapeuticRidingCenter/"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
