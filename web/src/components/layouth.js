import React from "react";
import Header2 from "./header2";
import Footer from "../components/footer";

import "../styles/layout.css";
import styles from "./layout.module.css";

const Layouth = ({ children, onHideNav, onShowNav, showNav, siteTitle, nodes }) => (
  <div>
    <Header2
      nodes={nodes}
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      message="Preparing students in Houston and the surrounding areas to be the next generation of leaders building healthy and resilient communities."
    />
    <div className={styles.content}>{children}</div>

    <Footer />
  </div>
);

export default Layouth;
