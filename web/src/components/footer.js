import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import EYCIcon from './img/eyc_icon.png'
import Prefooter from './img/prefooter.png'
import EdfLogo from './img/edf.png'

import styles from './footer.module.css'

const Footer = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div>
<div class="tc-l black mt4 mt5-m mt6-l ph3 w-100">
  <h1 class="f2 f1-l fw2 black-90 mb0 lh-title">Would you like more information?</h1>
  <h2 class="fw1 f3 black-80 mt3 mb4"></h2>
  <a class="f5 no-underline grow dib v-mid bg-green white ba ph4 pv3 mb3 pa6 br4"  href="/contact">Contact Us</a>
  <br /><img class="w-20 mt5" src={EdfLogo} />

</div>

<div class="w-100" className={styles.mbneg6}>
  <img src={Prefooter} class="w-100" className={styles.prefooter} />
</div>




<footer class="pa4 pa5-l white-70 bt eycblue" >
  <div class="w-100">
    <div class="dib mb4-l w-50-l w-100 cf">
      {/* <h1 class="fl w-100 pv0 f6 fw6 ttu tracked mb4">Want to learn more about <br />the Environmental Youth Council? 
</h1> */}
      <article class="fl w-100 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">

        {/* <div class="mb4 mb0-ns dib">
        Contact Shannon Thomas at  &nbsp;
          <a class="white-70 f3-ns fw6 tl link dim dib" href="mailto:teenscareaboutcleanair@edf.org"> teenscareaboutcleanair@edf.org</a>
        </div> */}

        <div class="mt3 lh-copy">

        The Environmental Youth Council is a program of Environmental Defense Fund. Research reported in this website was supported by the Gulf Research Program of the National Academies of Sciences, Engineering, and Medicine under award number 2000009823. The content is solely the responsibility of the authors and does not necessarily represent the official views of the Gulf Research Program or the National Academies of Sciences, Engineering, and Medicine.
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
      <p class="f7 white-70 dib pr3 mb3">Copyright Environmental Defense Fund, Inc. 2020</p>
    </div>
    <div class="db dtc-ns black-70 tc tr-ns v-mid"><span class="white mb3">
    Get involved in the fight for clean air in Houston</span><br /><br />
      <a href="https://www.facebook.com/onebreathhou" class="link dim dib mr3 white-70" title="One Breath Parnership on Facebook">
      <svg class="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
                    <title >facebook icon</title>
                    <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
                    ></path>
                  </svg>
                </a>
                <a href="https://twitter.com/onebreathhou" class="link dim dib mr3 white-70" title="One Breath Parnership on Twitter">
                  <svg class="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
                    fill="currentColor" >
                    <title >twitter icon</title>
                    <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
                    ></path>
                  </svg>
                </a>
                
                
              </div>
            </div>

          </footer>
          </div>
)

export default Footer
