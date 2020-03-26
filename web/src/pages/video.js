import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";
import Header from "../components/header";
import Footer from "../components/footer";
import IH from "../components/img/1.png";
import PMHE from "../components/img/2.png";
import GFC from "../components/img/3.png";
import Inhaling from "../components/img/1.png";
import Illustrated from "../components/img/2.png";
import Doc1 from "../components/pdf/Rules-and-Guidelines.pdf";
import Doc2 from "../components/pdf/Video-Topic-Ideas.pdf";
import PortableText from "../components/portableText";

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <h1>{props.children}</h1>;
        case "h2":
          return <h2>{props.children}</h2>;
        case "h3":
          return <h3>{props.children}</h3>;
        case "h4":
          return <h4>{props.children}</h4>;
        case "blockquote":
          return <blockquote>{props.children}</blockquote>;
        default:
          return <p>{props.children}</p>;
      }
    },
    column3(props) {
      return (
        <div>
          <p>{props.header1}</p>
          <p>{props.text1}</p>
        </div>
      );
    }
  }
};

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query VideoPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      _rawVideopagecontent
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const VideoPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <section class="cf w-100  pa5">
          <PortableText blocks={site._rawVideopagecontent} serializers={serializers} />
          <h3 class="tc dark-blue f3 tc">4th Annual</h3>

          <h2 class="tc dark-blue f2 tc">
            Houston Teens Care about Clean Air <br />
            Video Contest
          </h2>
          <h3 class="lh-copy dark-blue fw1 f4 ttu tc">The Contest </h3>
          <p class="lh-copy fw3 f3">
            Houston area high school students - We want to hear <span class="i">your</span> stories!
            Create a short video (1 to 2 minutes) that shows us what <span class="i">you</span> want
            to say about dirty air, climate change, health and the environment in Houston.{" "}
          </p>
          <ul>
            <li class="lh-copy fw3 f3 mb3">
              How does air pollution affect you, your health, your family and your future? Why do{" "}
              <span class="i">you</span> care about clean air?
            </li>
            <li class="lh-copy fw3 f3 mb3">
              Show us what young people like you can do every day to make Houston’s air cleaner.{" "}
            </li>
            <li class="lh-copy fw3 f3 mb3">
              Show us <span class="i">where</span> and show us <span class="i">why</span> Houston’s
              air quality isn’t what it should be.{" "}
            </li>
          </ul>
          <p class="lh-copy fw3 f3">
            Be creative! Be yourself! We want to see anything and everything: animations, music
            videos, comedies, interviews, documentarie …
          </p>
          <p class="lh-copy fw3 f3">
            Create a powerful video. Make us laugh. Make us cry. Teach. Inspire.
          </p>
          <h3 class="lh-copy dark-blue fw1 f4 ttu tc">The Prizes </h3>

          <div class="w-100 flex flex-wrap green tc">
            <div class="w-33-ns w-100 flex tc pa3">
              <span class="tc center">
                <p>
                  <b>First Place</b> <br />
                  <br /> <span class="f3">$2,500 Visa gift card</span>
                </p>
              </span>
            </div>

            <div class="w-33-ns w-100 flex tc pa3">
              <span class="tc center">
                <p>
                  <b>Second Place</b> <br />
                  <br /> <span class="f3">$1,500 Visa gift card </span>{" "}
                </p>
              </span>
            </div>

            <div class="w-33-ns w-100 flex tc pa3">
              <span class=" tc center">
                <p>
                  <b>Third Place</b> <br />
                  <br /> <span class="f3">$500 Visa Gift Card</span>{" "}
                </p>
              </span>
            </div>
            <span class="tc center">
              <p>
                <b>
                  {" "}
                  <span class="f3 fw1">YouTube People’s Choice Award</span>
                </b>
              </p>
            </span>
          </div>

          <h3 class="lh-copy dark-blue fw1 f4 ttu tc">The Deadline </h3>
          <p class="lh-copy fw3 f3 tc">
            Videos must be submitted by <span class="b">March 31, 2020.</span> <br />
            <span class="i">
              Contact your campus context coordinator for submission instructions.{" "}
            </span>
          </p>

          <h3 class="lh-copy dark-blue fw1 tc f4 ttu mt5">How to Participate </h3>
          <p class="lh-copy fw3 tc f3">
            Only students from the following approved high schools may participate:
            <br />
            Galena Park High School <br />
            Pasadena Memorial High School <br />
            Raul Yzaguirre Schools for Success (RYSS) <br />
            Kashmere High School
            <br />
            <br />
            Want to create a video? Pick up a Participant Packet from the contest coordinator at
            your school.
            <br />
            <br />
            Campus Coordinators:
            <br />
            Pasadena Memorial HS – Mrs. Ashley Poloha
            <br />
            Galena Park HS – Mr. Andree Torres
            <br />
            RYSS – Mrs. Rebecca Engquist
            <br />
            Kashmere HS - TBD
          </p>

          <h3 class="lh-copy dark-blue fw1 f4 ttu tc">The Rules</h3>
          <ul>
            <li class="lh-copy fw3 f3 mb3">
              Videos may be created by individuals or groups of up to 4 students. Only one
              submission per person or team.
            </li>
            <li class="lh-copy fw3 f3 mb3">
              Videos may not exceed two minutes in length (not including title screen).
            </li>

            <li class="lh-copy fw3 f3 mb3">
              Videos must be original and unpublished works that have never been previously
              submitted in another contest or film festival.
            </li>
            <li class="lh-copy fw3 f3 mb3">
              Complete list of rules and guidelines available below and in Participant Packet
            </li>
          </ul>

          <h3 class="lh-copy dark-blue fw1 f4 ttu tc">Judging Criteria</h3>
          <ul>
            <li class="lh-copy fw3 f3 mb3">Creativity/Originality</li>
            <li class="lh-copy fw3 f3 mb3">Scientific accuracy</li>
            <li class="lh-copy fw3 f4 mb3 ml4">
              Provides relevant, factual information about air pollution/climate change AND impacts
              on health from credible sources (must be cited at end of video)
            </li>
            <li class="lh-copy fw3 f3 mb3">Storytelling ability/Impact</li>
            <li class="lh-copy fw3 f4 mb3 ml4">
              Does the video evoke emotion? Is it engaging from beginning to end?
            </li>
            <li class="lh-copy fw3 f3 mb3">Video quality</li>
            <li class="lh-copy fw3 f4 mb3 ml4">Sound, video, lighting, editing </li>
          </ul>
          <br />

          <h3 class="lh-copy dark-blue fw1 f4 ttu tc">Previous Winners</h3>
          <div class="w-100 flex tc">
            <div class="w-50-ns w-100 flex tc pa3">
              <center>
                <a
                  target="_blank"
                  class="link lh-copy black"
                  href="https://www.youtube.com/watch?v=wpFvz3Zm8r0&t=7s"
                >
                  <img src={Inhaling} />
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
                  {" "}
                  <img src={Illustrated} />
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

          <h3 class="tc dark-blue f3 tc">
            TEACHERS AND ADMINISTRATORS CLICK THE BUTTON BELOW <br />
            To receive information about how your school can participate!
          </h3>

          <div class="w-100 flex flex-wrap green tc">
            <div class="w-50-ns w-100 flex tc pa3">
              <span class="tc center">
                <a class="link green" href={Doc1}>
                  <p>
                    Click here to view complete <br />
                    contest rules and guidelines
                  </p>
                </a>
              </span>
            </div>

            <div class="w-50-ns w-100 flex tc pa3">
              <span class="tc center">
                <a class="link green" href={Doc2}>
                  <p>
                    Need ideas for your video? <br />
                    Click here
                  </p>{" "}
                </a>{" "}
              </span>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default VideoPage;
