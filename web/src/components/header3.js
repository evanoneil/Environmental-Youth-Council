import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Group3 from "./img/group3.jpg";
import Subheaditem from "./subheaditem";
import Logo from "./img/eyc.png";
import Flower from "./img/icons/flower_256.png";
import Cloud from "./img/icons/cloud_256.png";
import GWW from "./img/icons/global-warming-world_256.png";
import Sun from "./img/icons/sun-heat_256.png";
import World from "./img/icons/world-caring_256.png";
import Hand from "./img/icons/hand_256.png";
import Bug from "./img/bug.png";

import styles from "./header3.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, message }) => (
  <div className="z1">
    <div className={styles.enterprise}>
      <div className={styles.bluebk}>
        <nav className="dt w-100 bg-white pl5 pr5 pt3 pb3 center galaxy">
          <div className="db w5 v-mid pa1">
            <Link to="./">
              <img src={Logo} />
            </Link>
          </div>
          <div className="dtc-ns db  v-mid tr pa3">
            {/* <a class="f6 fw4 hover-white no-underline black-70 dn dib-ns pv2 ph3" href="/" >About Us</a>
            <a class="f6 fw4 hover-white no-underline black-70 dn dib-ns pv2 ph3" href="/" >Blog/News</a> */}
            <Link class="f6 fw4 hover-blue no-underline black-70   pv2 ph3" to="./contact">
              Contact Us
            </Link>
            <Link
              class="f5-ns f7 fw4 hover-blue no-underline black-70 green ml2 pv2 ph3 ba"
              to="./video"
            >
              Video Contest
            </Link>
          </div>
        </nav>

        <article className="vh-50 pa4 mt4 dt w-100">
          <div className="tc v-top tc black ph3 ph4-l">
            <center>
              <h1 className="mw7 f2-m f2-l f3 fw6 tc white mb3">
                Preparing students in Houston and the surrounding areas to be the next generation of
                leaders building healthy and resilient communities.
              </h1>
            </center>
          </div>
        </article>
      </div>
    </div>
  </div>
);

export default Header;
