/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='main-header'>
      <div className='container-fluid header-base'>
        <div className='header-bottom'>
          <div className='header-left'>
            <div className='logo'>
              <Link href='/'>
                <img src='/images/logo.png' alt='logo' />
              </Link>
            </div>
            <div className='register-button'>
              <Link
                href='/registration'
                className='btn btn-outline-light !tw-flex'
              >
                Register
              </Link>
            </div>
          </div>
          <div className='header-right'>
            <nav className='navbar navbar-expand-lg'>
              <div className='navbar-collapse collapse'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link className='nav-link active' href='/'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link className='nav-link dropdown-toggle' href='/about'>
                      About
                    </Link>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link className='dropdown-item' href='/about-summit'>
                          About the Summit
                        </Link>
                      </li>
                      <li>
                        <Link className='dropdown-item' href='/the-host'>
                          The host
                        </Link>
                      </li>
                      <li>
                        <Link className='dropdown-item' href='/media-partners'>
                          Media partners
                        </Link>
                      </li>
                      <li>
                        <Link className='dropdown-item' href='/sponsors'>
                          Sponsors
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/planning-committee'
                          className='dropdown-item'
                        >
                          Planning committee
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link href='' className='nav-link dropdown-toggle'>
                      Who is attending
                    </Link>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link className='dropdown-item' href='/speakers'>
                          Invited Heads of State
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item'
                          href='/invited-personalities'
                        >
                          Invited Personalities
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link className='nav-link dropdown-toggle' href='/'>
                      Resources
                    </Link>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link className='dropdown-item' href='/news'>
                          News
                        </Link>
                      </li>
                      <li>
                        <Link className='dropdown-item' href='/the-afcfta'>
                          The AfCFTA
                        </Link>
                      </li>
                      <li>
                        <Link href='/agenda' className='dropdown-item'>
                          The AU Agenda 2063
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link className='nav-link dropdown-toggle' href='/'>
                      Event guide
                    </Link>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link href='/peduase' className='dropdown-item'>
                          Peduase
                        </Link>
                      </li>
                      <li>
                        <Link href='/accra' className='dropdown-item'>
                          Accra
                        </Link>
                      </li>
                      <li>
                        <Link className='dropdown-item' href='/protocols'>
                          Protocols
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' href='/help'>
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className='header-top'>
          <div className='header-date'>
            <p>January 26th - 28th 2023</p>
          </div>
          <div className='header-top-right d-flex align-items-center'>
            <div className='language-dropdown dropdown'>
              <button
                className='btn btn-flat dropdown-toggle text-white'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <span className='flag-icon'>
                  <img src='/images/flags/english.png' alt='eng' />
                </span>
                <span className='language-name'>English</span>
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <Link href='/' className='dropdown-item'>
                    <span className='flag-icon'>
                      <img src='/images/flags/english.png' alt='eng' />
                    </span>
                    <span className='language-name'>English</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/arabic.png' alt='eng' />
                    </span>
                    <span className='language-name'>Arabic</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/french.png' alt='eng' />
                    </span>
                    <span className='language-name'>French</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/germany.png' alt='eng' />
                    </span>
                    <span className='language-name'>German</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/portuguese.png' alt='eng' />
                    </span>
                    <span className='language-name'>Portuguese</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/spain.png' alt='eng' />
                    </span>
                    <span className='language-name'>Spanish</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='social-profiles'>
              <Link href='/'>
                <img src='/images/socials/facebook.png' alt='FacebookIcon' />
              </Link>
              <Link href='/'>
                <img src='/images/socials/twitter.png' alt='TwitterIcon' />
              </Link>
              <Link href='/'>
                <img src='/images/socials/linkedin.png' alt='LinkedinIcon' />
              </Link>
              <Link href='/'>
                <img src='/images/socials/instagram.png' alt='InstagramIcon' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
