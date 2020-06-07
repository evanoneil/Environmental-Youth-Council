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
import Layout2 from "../containers/layout2";
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
import Helmet from "react-helmet";
import OGImage from "../images/og.jpg";

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
    <Layout2>
      <Helmet>
        <title>{site.title}</title>
        <meta property="title" content={site.title} />

        <meta property="og:title" content={site.title} />
        <meta property="description" content={site.description} />
        <meta
          property="image"
          content="https://environmental-youth-council.netlify.app/static/og-39aa5b62b7b76ab64ac4a6154fe2f72c.jpg"
        />
        <meta
          property="og:image"
          content="https://environmental-youth-council.netlify.app/static/og-39aa5b62b7b76ab64ac4a6154fe2f72c.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta
          property="twitter:image"
          content="https://environmental-youth-council.netlify.com/static/og-39aa5b62b7b76ab64ac4a6154fe2f72c.jpg"
        /> */}
      </Helmet>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
        image={OGImage}
      />{" "}
      <Container>
        <section class="cf w-100  pa5">
          <PortableText blocks={site._rawVideopagecontent} serializers={serializers} />
        </section>
      </Container>
    </Layout2>
  );
};

export default VideoPage;
