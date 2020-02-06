import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

const Subheaditem = props => (
    <article class="tc db w-40 white w-33-ns ">
    <a href="#0" class="ph2 ph0-ns pb3 link db">
      <img src={props.icon} class="mw3" />
      <h3 class="center  f4-l f6 mb0 white-90">{props.title}</h3>
    </a>
  </article>
);
export default Subheaditem