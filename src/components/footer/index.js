import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './footer.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  // Create varibles of our dom nodes
  // let num = useRef(null);
  // let add = useRef(null);
  // let link = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.bottom',
            start: 'center bottom',
            scroller: '.page',
          },
        })
        .from('.contact-head', {
          duration: 1,
          opacity: 0,
          x: -20,
          ease: 'Expo.easeInOut',
        })
        .from(['.contact-num', '.contact-add', '.links'], {
          duration: 1,
          delay: 0.2,
          opacity: 0,
          y: 20,
          ease: 'Expo.easeInOut',
          stagger: {
            amount: 0.8,
          },
        });
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <footer>
      <div className='container'>
        <div className='bottom'>
          <div className='bottom-container'>
            <div className='contact-head'>
              <h1>
                Reach Out <span>To Us</span>
              </h1>
            </div>

            <div className='contact-body'>
              <div className='contact-num'>
                <div className='contact-num-head'>
                  <h2>telephone:</h2> <br />
                </div>
                <div className='contact-num-body'>
                  <h3>081-6835-0106</h3> <br />
                </div>
              </div>
              <div className='contact-add'>
                <div className='contact-add-head'>
                  <h2>email address:</h2> <br />
                </div>
                <div className='contact-add-body'>
                  <h3>
                    adekanyeadegoke96@gmail.com <br />
                    XXX-XXX-XXX-XXX-XXX-XXX
                  </h3>
                  <br />
                </div>
              </div>

              <div className='links'>
                <div className='links-head'>
                  <h2>need help?</h2> <br />
                </div>
                <div className='link-body'>
                  <ul>
                    <li>
                      <Link to='/'>About</Link>
                    </li>
                    <li>
                      <Link to='/'>Contact</Link>
                    </li>
                    <li>
                      <Link to='/'>Discover</Link>
                    </li>
                    <li>
                      <Link to='/'>Twitter</Link>
                    </li>
                    <li>
                      <Link to='/'>Instagram</Link>
                    </li>
                    <li>
                      <Link to='/'>LinkedIn</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='legal-div'>
            <ul className='lg-first'>
              <li>ALL RIGHT RESERVED 2021</li>
              <li>LEGALS</li>
            </ul>

            <div className='lg-second'>
              <p>HALIMA. 2022</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
