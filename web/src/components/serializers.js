import React from "react";
import Figure from "./Figure";
import Img from "gatsby-image";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: ({ node }) => (
      <center>
        <img
          src={imageUrlFor(buildImageObj(node))
            // .width(1200)
            // .height(Math.floor((9 / 16) * 1200))
            .fit("crop")
            .auto("format")
            .url()}
          // alt={node.header2.alt}
        />
      </center>
    ),

    column2: ({ node }) => (
      <div class="w-100 flex tc">
        <div class="w-50-ns w-100 flex tc pa3">
          <center>
            <a
              target="_blank"
              class="link lh-copy black"
              href="https://www.youtube.com/watch?v=wpFvz3Zm8r0&t=7s"
            >
              <img
                src={imageUrlFor(buildImageObj(node.header1))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={node.header1.alt}
              />

              {/* <Img fluid={node.header1.asset} /> */}
              <p>
                2019 First Place Winner
                <br />
                <b>“Inhaling Hope”</b> <br />
                by Evelyn Garcia, Galena Park High School
              </p>
            </a>
          </center>
        </div>

        <div class="w-50-ns w-100 flex tc pa3">
          <center>
            <a
              target="_blank"
              class="link lh-copy black"
              href="https://www.youtube.com/watch?v=randDdYRK_Y"
            >
              <img
                src={imageUrlFor(buildImageObj(node.header2))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={node.header2.alt}
              />

              <p>
                2019 Second Place Winner
                <br />
                <b>“Illustrated: Particulate Matter's Health Effects” </b> <br />
                by Kevin Juarez, Pasadena Memorial High School
              </p>
            </a>
          </center>
        </div>
      </div>
    ),
    column3: ({ node }) => (
      <div class="w-100 flex flex-wrap green tc">
        <div class="w-33-ns w-100 flex tc pa3">
          <span class="tc center">
            <p>
              <strong>{node.header1}</strong> <br />
              <br /> <span class="f3">{node.text1}</span>
            </p>
          </span>
        </div>

        <div class="w-33-ns w-100 flex tc pa3">
          <span class="tc center">
            <p>
              <b>{node.header2}</b> <br />
              <br /> <span class="f3">{node.text2}</span>{" "}
            </p>
          </span>
        </div>

        <div class="w-33-ns w-100 flex tc pa3">
          <span class=" tc center">
            <p>
              <b>{node.header3}</b> <br />
              <br /> <span class="f3">{node.text3}</span>{" "}
            </p>
          </span>
        </div>
        <span class="tc center">
          <p>
            <b>
              {" "}
              <span class="f3 fw1">{node.bottom}</span>
            </b>
          </p>
        </span>
      </div>
    )
  }
};

export default serializers;
