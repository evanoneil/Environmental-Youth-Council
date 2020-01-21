import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Group from './img/group.png'
import Logo from './img/eyc.png'



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
            <Link class="f6 fw4 hover-white no-underline black-70   pv2 ph3" to="./video" >Video Contest</Link>  
            <Link class="f6-ns f7 fw4 hover-blue no-underline black-70  ml2 pv2 ph3 ba" to="./contact" >Contact Us</Link> 
          </div>
        </nav> 

        <article class="vh-50 pa4 mt4 dt w-100">
          <div class="tc v-top tc black ph3 ph4-l">
            <center>
            <h1 class="mw7 f2-m f2-l f4 fw6 tc white mb3">Preparing students in Houston and the surrounding areas to be the next generation of leaders building healthy and resilient communities.</h1>
            </center>
          </div>

        </article>
      </div>
    </div>

   </div>


)

export default Header
