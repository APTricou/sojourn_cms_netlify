import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const DirectionsPageTemplate = ({
  title,
  subtitle,
  address,
  contact,
  hours,
  maps,
}) => {
  return (
    <div className="content">
      <div className="full-width-title">
        <div className="title-overlay">
          <h1 className="title-overlay-text is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
            {title}
          </h1>
          <h3 className="title-overlay-text is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
            {subtitle}
          </h3>
        </div>
      </div>
      <div className="columns" style={{ margin: '1em 1em 1em 1em' }}>
        <div className="column content">
          <h1>Address</h1>
          <p>{address.line1}</p>
          <p>{address.line2}</p>
        </div>
        <div className="column content">
          <h1>Contact Us</h1>
          <p>{contact.number}</p>
          <p>{contact.email}</p>
        </div>
        <div className="column content">
          <h1>Hours</h1>
          <p>Monday - Friday: {hours.monthrufri}</p>
          <p>Saturday - Sunday: {hours.satsun}</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <PreviewCompatibleImage imageInfo={maps.wide} />
        </div>
        <div className="column">
          <PreviewCompatibleImage imageInfo={maps.close} />
        </div>
      </div>
      <h5>Maps courtesy of Apple Maps</h5>
    </div>
  );
};

DirectionsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  address: PropTypes.object,
  contact: PropTypes.object,
  hours: PropTypes.object,
  maps: PropTypes.object,
};

const DirectionsPage = ({ data }) => {
  const { markdownRemark: md } = data;

  return (
    <Layout>
      <DirectionsPageTemplate
        title={md.frontmatter.title}
        subtitle={md.frontmatter.subtitle}
        address={md.frontmatter.address}
        contact={md.frontmatter.contact}
        hours={md.frontmatter.hours}
        maps={md.frontmatter.maps}
      />
    </Layout>
  );
};

DirectionsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DirectionsPage;

export const directionsPageQuery = graphql`
  query DirectionsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "directions-page" } }) {
      frontmatter {
        title
        subtitle
        address {
          line1
          line2
        }
        contact {
          number
          email
        }
        hours {
          monthrufri
          satsun
        }
        maps {
          close {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          wide {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
