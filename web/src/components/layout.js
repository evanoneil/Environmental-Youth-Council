import React from 'react'
import Header from './header'
import Footer from "../components/footer";

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} message="Preparing students in Houston and the surrounding areas to be the next generation of leaders building healthy and resilient communities."/>
    <div className={styles.content}>{children}</div>
    {/* <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
          &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer> */}
            <Footer />

  </>
)

export default Layout
