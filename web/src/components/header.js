import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Group from './img/group.png'
import Logo from './img/eyc.png'



import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle, message}) => (
  <div class="z1">
    <div class="w-100 pb6-m" className={styles.enterprise} >
      <div className={styles.bluebk}>
        <nav class="dt w-100 bg-white pl5 pr5 pt3 pb3 center galaxy"  > 
          <div class="dtc w5 v-mid pa3">
            <Link to="./">
              <img src={Logo} />                    
              </Link>
          </div>
          <div class="dtc v-mid tr pa3">
            {/* <a class="f6 fw4 hover-white no-underline black-70 dn dib-ns pv2 ph3" href="/" >About Us</a> 
            <a class="f6 fw4 hover-white no-underline black-70 dn dib-ns pv2 ph3" href="/" >Blog/News</a> 
            <a class="f6 fw4 hover-white no-underline black-70 dn dib-l pv2 ph3" href="/" >Video Contest</a>  */}
            <a class="f6 fw4 hover-white no-underline black-70 dib ml2 pv2 ph3 ba" href="./contact" >Contact Us</a> 
          </div>
        </nav> 

        <article class="vh-50 pa5 dt w-100">
          <div class="dtc v-mid tc black ph3 ph4-l">
            <center>
            <h1 class="mw7 f2-m f-4-l fw6 tc white mb3">Preparing students in Houston and the surrounding areas to be the next generation of leaders building healthy and resilient communities.</h1>
            </center>
          </div>

        </article>
      </div>
    </div>

   </div>


)

export default Header
