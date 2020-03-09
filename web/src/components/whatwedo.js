import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import AboutItem from "./aboutitem";

function WhatWeDo(props) {
  return (
    <div>
      <h2 class="tc dark-blue f2">What we do</h2>
      <div class="flex flex-wrap justify-center">
        {props.nodes && props.nodes.map(nodes => <AboutItem {...nodes} />)}
      </div>
    </div>
  );
}

export default WhatWeDo;
