import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Subheaditemblock from './subheaditemblock'

function Subheaditem (props) {
  return (
    <div>
      <br />
      <h2 className='tc dark-blue f2 mt5'>What we explore</h2>
      <section className='cf w-60-l w-80-m w-90 center pa3 pv5-l bg-green subheadblock2'>
        <div className='subheadinterior justify-between flex flex-wrap'>
          {' '}
          {props.focusNodes &&
            props.focusNodes.map(focusNodes => <Subheaditemblock {...focusNodes} />)}
        </div>
      </section>
    </div>
  )
}

export default Subheaditem
