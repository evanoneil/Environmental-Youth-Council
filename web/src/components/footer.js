import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import EYCIcon from './img/eyc_icon.png'
import Prefooter from './img/prefooter.png'

import styles from './footer.module.css'

const Footer = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div>
<div class="tc-l black mt4 mt5-m mt6-l ph3 w-100">
  <h1 class="f2 f1-l fw2 black-90 mb0 lh-title">Would you like more information?</h1>
  <h2 class="fw1 f3 black-80 mt3 mb4"></h2>
  <a class="f5 no-underline grow dib v-mid bg-green white ba ph4 pv3 mb3 pa6 br4"  href="/">Contact Us</a>
</div>

<div class="w-100" className={styles.mbneg6}>
  <img src={Prefooter} class="w-100" className={styles.prefooter} />
</div>




<footer class="pa4 pa5-l white-70 bt eycblue" >
  <div class="w-100">
    <div class="dib mb4-l w-50-l w-100 cf">
      <h1 class="fl w-100 pv0 f6 fw6 ttu tracked mb4">Want to learn more about the Environmental Youth Council? 
</h1>
      <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">

        <div class="mb4 mb0-ns dib">
        Contact Shannon Thomas at  &nbsp;
          <a class="white-70 f3-ns fw6 tl link dim dib" href="mailto:teenscareaboutcleanair@edf.org"> teenscareaboutcleanair@edf.org</a>
        </div>

        <div class="mt3">

        Research reported in this website was supported by the Gulf Research Program of the National Academies of Sciences, Engineering, and Medicine under award number 2000009823. The content is solely the responsibility of the authors and does not necessarily represent the official views of the Gulf Research Program or the National Academies of Sciences, Engineering, and Medicine.

        </div>
      </article>
    </div>
    <div class="dib mb4-l w-40-l w-100 cf tr v-top">
      {/* <img src={EYCIcon} className="w-10"/> */}
    </div>
  </div> 
            
{/* <section class="cf mb5">
</section> */}

  <div class="dt dt--fixed w-100" >
    <div class="dn dtc-ns v-mid">
      <p class="f7 white-70 dib pr3 mb3">Copyright © EYC 2020</p>
    </div>
    <div class="db dtc-ns black-70 tc tr-ns v-mid">
      <a href="https://www.facebook.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Facebook">
      <svg class="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
                    <title >facebook icon</title>
                    <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
                    ></path>
                  </svg>
                </a>
                <a href="https://twitter.com/" class="link dim dib mr3 black-70">
                  <svg class="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
                    fill="currentColor" >
                    <title >twitter icon</title>
                    <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
                    ></path>
                  </svg>
                </a>
                <a href="https://medium.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Medium">
                  <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 290 248.6"
                    fill="currentColor" >
                    <g >
                      <path fill="currentColor" class="st0" d="M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z"
                      ></path>
                      <polygon fill="currentColor" points="105.2,61.2 105.2,160.3 193.3,204.4 	"
                      ></polygon>
                      <path fill="currentColor" d="M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z"
                      ></path>
                      <path fill="currentColor" d="M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z"
                      ></path>
                    </g>
                  </svg>
                </a>
                
              </div>
            </div>
            <div class="db dn-ns">
              <p class="f7 black-70 mt4 tc">
                Copyright © Your Company 2038
              </p>
            </div>
          </footer>
          </div>
)

export default Footer
