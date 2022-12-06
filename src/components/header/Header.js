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
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link
                      href='/'
                      className='nav-link active'
                      aria-current='page'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      About
                    </a>
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
                          className='dropdown-item'
                          href='/planning-committee'
                        >
                          Planning committee
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Who is attending
                    </a>
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
                    <a
                      className='nav-link dropdown-toggle'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Resources
                    </a>
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
                        <Link className='dropdown-item' href='/agenda'>
                          The AU Agenda 2063
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Event guide
                    </a>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link className='dropdown-item' href='/peduase'>
                          Peduase
                        </Link>
                      </li>
                      <li>
                        <Link className='dropdown-item' href='/accra'>
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
                    <Link className='nav-link' aria-current='page' href='/help'>
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
                className='btn text-white btn-flat dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <span className='flag-icon tw-flex'>
                  <img src='/images/flags/english.svg' alt='eng' />
                </span>
                <span className='language-name tw-font-bold'>English</span>
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/english.svg' alt='eng' />
                    </span>
                    <span className='language-name'>English</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/arabic.svg' alt='ara' />
                    </span>
                    <span className='language-name'>Arabic</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/french.svg' alt='fr' />
                    </span>
                    <span className='language-name'>French</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/germany.svg' alt='ge' />
                    </span>
                    <span className='language-name'>German</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/portuguese.svg' alt='port' />
                    </span>
                    <span className='language-name'>Portuguese</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href='/'>
                    <span className='flag-icon'>
                      <img src='/images/flags/spain.svg' alt='sp' />
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
