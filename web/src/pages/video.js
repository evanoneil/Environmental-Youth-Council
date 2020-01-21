import React from "react";
import {Link} from 'gatsby'
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
          <h3 class="tc dark-blue f3 tc">4th Annual</h3>

          <h2 class="tc dark-blue f2 tc">Houston Teens Care about Clean Air Video Contest</h2>
          <h3 class="lh-copy dark-blue fw1 f4 ttu">The Contest </h3>
          <p class="lh-copy fw3 f3">
            Houston high school students - We want to hear your stories. Create a short video (1 to
            2 minutes) that shows us what <span class="i">you</span> want to say about dirty air,
            health and the environment in Houston.
          </p>
          <ul>
            <li class="lh-copy fw3 f3 mb3">
            How does air pollution affect you, your health, your family and your future? Why do <span class="i">you</span> care about clean air?
            </li>
            <li class="lh-copy fw3 f3 mb3">
            Show us what young people like you can do every day to make Houston’s air cleaner.            </li>
            <li class="lh-copy fw3 f3 mb3"> 
            Show us <span class="i">where</span> and show us <span class="i">why</span> Houston’s air quality isn’t what it should be.            </li>
          </ul>
          <p class="lh-copy fw3 f3">
          Be creative! Be yourself! We want to see anything and everything: animations, music videos, interviews, documentaries …
          </p>
          <h3 class="lh-copy dark-blue fw1 f4 ttu">The Prizes </h3>

            <div class="w-100 flex flex-wrap green tc">
              <div class="w-33-ns w-100 flex tc pa3">
                  <span class="tc center">
                    <p>
                      <b>First Place</b> <br /> $2,500 Visa gift card
                    </p>
                  </span>
              </div>

              <div class="w-33-ns w-100 flex tc pa3">
                <span class="tc center">
                  <p>
                    <b>Second Place</b> <br />   $1,500 Visa gift card      </p>
                </span>
              </div>

              <div class="w-33-ns w-100 flex tc pa3">
                <span class=" tc center">
                  <p>
                    <b>Third Place</b> <br />$500 Visa Gift Card      </p>
                </span>
              </div>
            </div>

  <h3 class="lh-copy dark-blue fw1 f4 ttu">The Deadline </h3>
  <p class="lh-copy fw3 f3">
  Videos must be submitted by <span class="b">March 31, 2020.</span> <br />
  <span class="i">Contact your campus coordinator for submission instructions. </span>
          </p>

  <h3 class="lh-copy dark-blue fw1 tc f4 ttu mt5">How to Participate </h3>
  <p class="lh-copy fw3 tc f3">
  Only students from the following schools may participate:<br />
Galena Park High School | Pasadena Memorial High School | Raul Yzaguirre Schools for Success (RYSS) 
<br /><br />
Want to create a video? Pick up a Participant Packet from the contest coordinator at your school. 
<br /><br />

PMHS – Mrs. Ashley Poloha<br />
GPHS – Mr. Andree Torres<br />
RYSS – Mrs. Rebecca Enquist<br />
          </p>


          <Link to="./contact/"><h3 class="tc dark-blue f3 tc">TEACHERS AND ADMINISTRATORS CLICK HERE<br /> to receive information about how your school can participate!  </h3></Link>


        </section>
      </Container>
    </Layout>
  );
};

export default VideoPage;
