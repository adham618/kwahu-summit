/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='footer-section p-4'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='footer-top'>
              <div className='footer-newsletter'>
                <h3>Stay connected</h3>
                <div className='newsletter-box'>
                  <span>Your email</span>
                  <div className='d-flex'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='example@site.com'
                    />
                    <button className='btn btn-submit btn-secondary'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className='footer-logo'>
                <img src='/images/footer-logo.png' alt='footer logo' />
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='footer-center'>
              <div className='row'>
                <div className='col-md-9'>
                  <div className='footer-links w-full !tw-grid tw-flex-none tw-auto-rows-auto tw-grid-cols-5'>
                    <div className='footer-link-item m-0'>
                      <h3>&nbsp;</h3>
                      <ul>
                        <li>
                          <Link href='/'>The Host</Link>
                        </li>
                        <li>
                          <Link href='/'>Partners</Link>
                        </li>
                        <li>
                          <Link href='/'>The Summit</Link>
                        </li>
                      </ul>
                    </div>
                    <div className='footer-link-item m-0'>
                      <h3>Who is attending</h3>
                      <ul>
                        <li>
                          <Link href='/'>Captains of Industry</Link>
                        </li>
                        <li>
                          <Link href='/'>Heads of State</Link>
                        </li>
                        <li>
                          <Link href='/'>Notable Personalities</Link>
                        </li>
                      </ul>
                    </div>
                    <div className='footer-link-item m-0'>
                      <h3>Resourses</h3>
                      <ul>
                        <li>
                          <Link href='/'>News</Link>
                        </li>
                        <li>
                          <Link href='/'>The AfCFTA</Link>
                        </li>
                        <li>
                          <Link href='/'>The AU Agenda 2063</Link>
                        </li>
                      </ul>
                    </div>
                    <div className='footer-link-item m-0'>
                      <h3>Event guide</h3>
                      <ul>
                        <li>
                          <Link href='/'>Peduase</Link>
                        </li>
                        <li>
                          <Link href='/'>Accra</Link>
                        </li>
                        <li>
                          <Link href='/'>Protocols</Link>
                        </li>
                      </ul>
                    </div>
                    <div className='footer-link-item m-0 no-title'>
                      <ul>
                        <li>
                          <Link href='/'>Contact us</Link>
                        </li>
                        <li>
                          <Link href='/'>Privacy policy</Link>
                        </li>
                        <li>
                          <Link href='/'>Terms and conditions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='footer-copy'>
                    <ul>
                      <li>
                        <Link href='/'>
                          <img
                            src='/images/socials/instagram-green.png'
                            alt='instagram'
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href='/'>
                          <img
                            src='/images/socials/facebook-green.png'
                            alt='facebook'
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href='/'>
                          <img
                            src='/images/socials/twitter-green.png'
                            alt='twitter'
                          />
                        </Link>
                      </li>
                    </ul>
                    <p>
                      Copyright &copy; {new Date().getFullYear()}. All Rights
                      Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='footer-bottom'>
              <p>
                Developed by <Link href='/'>Peges Inc</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
