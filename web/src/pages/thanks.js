import React from "react";
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
import { navigate } from "gatsby-link";
import Helmet from "react-helmet";
import OGImage from "../images/og.jpg";

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

  query ThanksPageQuery {
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

const ThanksPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <Helmet>
          <meta name="image" content={OGImage} />
          <meta name="og:image" content={OGImage} />

          <meta name="twitter:title" content={site.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content={site.description} />
          <meta name="twitter:image" content={OGImage} />
        </Helmet>
        <SEO
          title={site.title}
          description={site.description}
          keywords={site.keywords}
          image={OGImage}
        />
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
      <Container>
        <h1 class="tc dark-blue mb5">Thanks for your message, we'll be in touch soon!</h1>
      </Container>
    </Layout>
  );
};

export default ThanksPage;
