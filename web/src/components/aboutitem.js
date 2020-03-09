import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";

function AboutItem(props) {
  return (
    console.log(props),
    (
      // <div>
      //   <p>hi</p>
      //   {props.title && <h1>{props.title}</h1>}
      // </div>
      <article class="br2 dark-gray ma3   w-100 w-40-m w-30-l  bg-green  ">
        {props.mainImage && props.mainImage.asset && (
          <img
            className="db w-100 br2 br--top"
            src={imageUrlFor(buildImageObj(props.mainImage))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
          />
        )}

        <div class="pa2 ph3-ns pb3-ns">
          <div class="dt w-100 mt1">
            <div class="dtc">
              {props.title && <h1 class="f5 f4-ns mv3 dark-blue">{props.title} </h1>}
            </div>
          </div>
          {props._rawExcerpt && (
            <p class="f6 lh-copy measure mt2 white">
              <PortableText blocks={props._rawExcerpt} />
            </p>
          )}
        </div>
      </article>

      // <article class="tc db w-40 white w-33-ns tooltip ">
      //   <a href="#0" class="ph2 ph0-ns pb3 link db">
      //     {/* <img src={props.icon} class="mw3" /> */}
      //     {props.mainImage && props.mainImage.asset && (
      //       <img
      //         className="mw3"
      //         src={imageUrlFor(buildImageObj(props.mainImage))
      //           .auto("format")
      //           .url()}
      //         alt={props.mainImage.alt}
      //       />
      //     )}
      //     {props.title && <h3 className="center f4-l f6 mb0 white-90">{props.title}</h3>}
      //   </a>
      //   {props._rawExcerpt && (
      //     <span className="tooltiptext">
      //       <PortableText blocks={props._rawExcerpt} />
      //     </span>
      //   )}
      // </article>
    )
  );
}

export default AboutItem;
