import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Subheaditemblock from "./subheaditemblock";

function Subheaditem(props) {
  return (
    <section class="cf w-60-l w-80-m w-90 center pa3 pv5-l bg-green subheadblock2">
      <div class="subheadinterior justify-between flex flex-wrap">
        {" "}
        {props.nodes && props.nodes.map(node => <Subheaditemblock {...node} />)}
      </div>
    </section>
  );
}

export default Subheaditem;
