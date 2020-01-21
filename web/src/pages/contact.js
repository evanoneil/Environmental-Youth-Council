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
import { navigate } from 'gatsby-link'

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

  query ContactPageQuery {
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactPage = props => {
  const { data, errors } = props;

  const [state, setState] = React.useState({})

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
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
          <Container>

      <h1 class="tc dark-blue mb5">Want to learn more about the
Environmental Youth Council?</h1>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        class="contact-form row"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" class="input-text js-input" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div class="form-field col x-50">
        
          <label>
            Your name:
            <br />
            <input type="text" class="input-text js-input" name="name" onChange={handleChange} />
          </label>
        
        </div>
        <div class="form-field col x-50">

          <label>
            Your email:
            <br />
            <input type="email" class="input-text js-input" name="email" onChange={handleChange} />
          </label>
        </div>
        <div class="form-field  col x-100">

        <p>
          <label>
            Message:
            <br />
            <textarea  class="input-text js-input" name="message" onChange={handleChange} />
          </label>
        </p>
        </div>

          <button class="f5 no-underline center tc grow dib v-mid bg-green white ba ph4 pv3 mb3 pa6 br4" type="submit">Send Message</button>
      </form>
      </Container>

    </Layout>
  );
};

export default ContactPage;
