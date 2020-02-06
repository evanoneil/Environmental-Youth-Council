import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Group from './img/group.png'
import Subheaditem from './subheaditem'
import Logo from './img/eyc.png'
import Flower from './img/icons/flower_256.png'
import Cloud from './img/icons/cloud_256.png'
import GWW from './img/icons/global-warming-world_256.png'
import Sun from './img/icons/sun-heat_256.png'
import World from './img/icons/world-caring_256.png'
import Hand from './img/icons/hand_256.png'
import Bug from './img/bug.png'


import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle, message}) => (
  <div class="z1">
    <div className={styles.enterprise} >
      <div className={styles.bluebk}>
        <nav class="dt w-100 bg-white pl5 pr5 pt3 pb3 center galaxy"  > 
          <div class="db w5 v-mid pa1">
            <Link to="./">
              <img src={Logo} />                    
              </Link>
          </div>
          <div class="dtc-ns db  v-mid tr pa3">
            {/* <a class="f6 fw4 hover-white no-underline black-70 dn dib-ns pv2 ph3" href="/" >About Us</a> 
            <a class="f6 fw4 hover-white no-underline black-70 dn dib-ns pv2 ph3" href="/" >Blog/News</a> */}
            <Link class="f6 fw4 hover-blue no-underline black-70 green  pv2 ph3" to="./video" >Video Contest</Link>  
            <Link class="f6-ns f7 fw4 hover-blue no-underline black-70  ml2 pv2 ph3 ba" to="./contact" >Contact Us</Link> 
          </div>
        </nav> 

        <article class="vh-50 pa4 mt4 dt w-100">
          <div class="tc v-top tc black ph3 ph4-l">
            <center>
            <h1 class="mw7 f2-m f2-l f3 fw6 tc white mb3">Preparing students in Houston and the surrounding areas to be the next generation of leaders building healthy and resilient communities.</h1>
            </center>
          </div>
          <section
        class="cf w-60-l w-80-m w-90 center pa3 pv5-l bg-green subheadblock2"
      >
        <div class="subheadinterior justify-between flex flex-wrap">
          <Subheaditem icon={Flower} title="Environmental Health" />
          <Subheaditem icon={Cloud} title="Air Quality" />
          <Subheaditem icon={GWW} title="Climate Change" />
          <Subheaditem icon={Sun} title="Environmental Justice" />
          <Subheaditem icon={World} title="Public Policy" />
          <Subheaditem icon={Hand} title="Civic Engagement" />

        </div>
      </section>
        </article>
      </div>
    </div>

   </div>


)

export default Header
