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
          <Subheaditem icon={Flower} title="Environmental Health" desc="Environmental Health focuses on how human health is impacted by environmental factors, both natural and man-made. The field works to advance policies and programs to reduce chemical and other environmental exposures in air, water, soil and food to protect people and provide communities with healthier environments."/>
          <Subheaditem icon={Cloud} title="Air Quality" desc="Air quality refers to the condition of the air around us. Good air quality is free from pollutants such as smoke, dust, smog and emissions from other sources, both natural and man-made. Good air quality is essential for the preservation of life on this planet for humans, plants, animals and natural resources. "/>
          <Subheaditem icon={GWW} title="Climate Change" desc="Climate change refers to the rise in average surface temperatures on Earth caused by growing emissions of carbon dioxide from human activities. Impacts related to climate change are evident —such as human health, agriculture and food security, water supply, transportation, energy, ecosystems, and others—and are expected to become increasingly disruptive in the coming decades."/>
          <Subheaditem icon={Sun} title="Environmental Justice" desc="Environmental justice is the fair treatment and meaningful involvement of all people regardless of race, color, national origin, or income, with respect to the development, implementation, and enforcement of environmental laws, regulations, and policies. Environmental justice really reflects the fundamental reality that vulnerable communities are all too often subject to the disproportionate burden of pollution and contamination."/>
          <Subheaditem icon={World} title="Public Policy" desc="Public policy can be generally defined as a collection of laws, mandates, regulations, and funding priorities established by a governmental entity or its representatives through a political process."/>
          <Subheaditem icon={Hand} title="Civic Engagement" desc="Civic engagement means working to make a difference in the civic life of our communities and developing the combination of knowledge, skills, values and motivation to make that difference. It means promoting the quality of life in a community, through both political and non-political processes."/>

        </div>
      </section>
        </article>
      </div>
    </div>

   </div>


)

export default Header
