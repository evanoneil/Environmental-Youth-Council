import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Group from './img/group.png'
import Logo from './img/eyc.png'
import Flower from './img/icons/flower_256.png'
import Cloud from './img/icons/cloud_256.png'
import GWW from './img/icons/global-warming-world_256.png'
import Sun from './img/icons/sun-heat_256.png'
import World from './img/icons/world-caring_256.png'
import Hand from './img/icons/hand_256.png'
import Bug from './img/bug.png'
import One from './img/1.jpg'
import Two from './img/2.jpg'
import Three from './img/3.jpg'
import Four from './img/4.jpg'
import Five from './img/5.jpg'
import Six from './img/6.jpg'
import Break from './img/break.png'

import styles from './header.module.css'

const Subheader = ({ onHideNav, onShowNav, showNav, siteTitle }) => (


<div class="bg-near-white">
  <div class="">
  <img
  class="w-100 subheadblock"
  src={Break} /> 
  </div>

      <section
        class="cf w-60 center pt5 pb5 bg-green subheadblock2"
      >
        <div class="subheadinterior">
          <article class="tc fl w-100 w-50-m white w-30-ns pa1-ns">
            <a href="#0" class="ph2 ph0-ns pb3 link db">
              <img src={Flower} class="mw3" />
              <h3 class="f5 center f4-ns mb0 white-90">Environmental Health</h3>
            </a>
          </article>

          <article class="tc fl w-100 w-50-m white w-30-ns pa1-ns">
            <a href="#0" class="ph2 ph0-ns pb3 link db">
              <img src={Cloud} class="mw3" />
              <h3 class="f5 center f4-ns mb0  white-90">Air Quality</h3>
            </a>
          </article>

          <article class="tc fl w-100 w-50-m white w-30-ns pa1-ns">
            <a href="#0" class="ph2 ph0-ns pb3 link db">
              <img src={GWW} class="mw3" />
              <h3 class="f5 center f4-ns mb0 white-90">Climate Change</h3>
            </a>
          </article>

          <article class="tc fl w-100 w-50-m white w-30-ns pa1-ns">
            <a href="#0" class="ph2 ph0-ns pb3 link db">
              <img src={Sun} class="mw3" />

              <h3 class="f5 center f4-ns mb0 white-90">Environmental Justice</h3>
            </a>
          </article>

          <article class="tc fl w-100 w-50-m white w-30-ns pa1-ns">
            <a href="#0" class="ph2 ph0-ns pb3 link db">
              <img src={World} class="mw3" />

              <h3 class="f5 center f4-ns mb0 white-90">Public Policy</h3>
            </a>
          </article>

          <article class="tc fl w-100 w-50-m white w-30-ns pa1-ns">
            <a href="#0" class="ph2 ph0-ns pb3 link db">
              <img src={Hand} class="mw3" />

              <h3 class="f5 center f4-ns mb0  white-90">Civic Engagement</h3>
            </a>
          </article>
        </div>
      </section>

      <section class="cf w-100 tc pa5 bg-near-white">
        {/* <img class="fl" src={Bug} /> */}
        <h2 class="tc dark-blue f2">What is the Environmental Youth Council?</h2>
        <p class="lh-copy fw3 f3">
        Environmental Defense Fund’s Environmental Youth Council is an educational program for high school students from the communities in Houston that are most affected by air pollution. The program is funded by a grant from the Gulf Research Program of the National Academy of Sciences (NAS).
        </p>
        <p class="lh-copy fw3 f3">The Environmental Youth Council includes students from </p>
        <div class="w-100 flex tc">
          <div class="w-33 flex tc pa3">
            <center>
              <span class="mlauto">
                <img src={Three} /> 
              </span>
              <h4>Galena Park High School</h4>
            </center>
          </div>
          <div class="w-33 flex tc pa3">
          <center>

            <span class="mlauto">
              <img src={Three} /> 
            </span>
            <h4>Pasadena Memorial High School</h4>
            </center>

          </div>
          <div class="w-33 flex tc pa3">
          <center>

            <span class="mlauto">
              <img src={Three} /> 
            </span>
            <h4>Raul Yzaguirre School for Success (RYSS)</h4>
</center>
          </div>
        </div>

        <br />

        <h2 class="tc dark-blue f2">What we do</h2>
        <div class="flex">
          <article class="br2 dark-gray   mv4 w-100 w-50-m w-30-l  bg-green  center">
            <img src={One} class="db w-100 br2 br--top" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv3 dark-blue">Science-Based Curricula & Leadership Training</h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 white">
              Hands-on lessons about air pollution, climate change, environmental justice, health and local government are paired with leadership and civics training to introduce students to important issues and develop problem-solving skills to address them.
              </p>
            </div>
          </article>

          <article class="br2    dark-gray   mv4 w-100 w-50-m w-30-l  bg-green   center">
            <img src={Two} class="db w-100 br2 br--top" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv3 dark-blue">Guest Speaker Series</h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 white">
              Experts from local government, nonprofit organizations and established research institutions share their firsthand knowledge to show students what the work for clean air and for a healthy, sustainable city looks like. Guest speakers have included staff from the City of Houston, Harris County Health Department, UT School of Public Health and Rice University. 
              </p>
            </div>
          </article>

          <article class="br2    dark-gray   mv4 w-100 w-50-m w-30-l  bg-green   center">
            <img src={Three} class="db w-100 br2 br--top" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv3 dark-blue">Field Trips</h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2   white">
              Student field trips to local museums, government meetings, industry hubs and community organizations put students directly in touch with the resources for change in their region.
              </p>
            </div>
          </article>
        </div>

        <div class="flex">


          <article class="br2    dark-gray   mv4 w-100 w-50-m w-30-l  bg-green   center">
            <img src={Five} class="db w-100 br2 br--top" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv3 dark-blue">Community Events</h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2   white">
              Students participate in local community events to improve health and address environmental challenges. Events may include CPR training, neighborhood cleanups and voter registration drives, and are geared at teaching students the necessary skills to organize in their communities to make a difference.
              </p>
            </div>
          </article>

          <article class="br2    dark-gray   mv4 w-100 w-50-m w-30-l bg-green    center">
            <img src={Six} class="db w-100 br2 br--top" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv3 dark-blue">Student-led Town Hall meetings</h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2   white">
              At the end of the school year, students organize community town hall meetings. Public discussions of the issues that arise from their experiences help students learn to communicate with their friends, family members and community to raise awareness and create consensus.
              </p>
            </div>
          </article>

          <article class="br2    dark-gray   mv4 w-100 w-50-m w-30-l  bg-green   center">
            <img src={Four} class="db w-100 br2 br--top" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv3 dark-blue">Washington, DC trip</h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2   white">
              Top students in the program have the opportunity to travel to Washington, D.C. Tours inside the offices of elected officials, environmental organizations and agencies and museums show students firsthand how environmental policies are made.              </p>
            </div>
          </article>
        </div>
      </section>
  </div>
);

export default Subheader
