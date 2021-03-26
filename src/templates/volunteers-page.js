import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import pdfdownload from '../img/pdfdownload.svg';
import email from '../img/mail.svg';

export const VolunteerPageTemplate = ({
  image,
  title,
  maintext,
  lefttitle,
  leftlist,
}) => {
  return (
    <div>
      <div
        className="full-width-image-fixed"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <div className="title-overlay">
          <h1 className="title-overlay-text is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
            {title}
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div
              className="column is-3 content"
              style={{
                backgroundColor: '#0007d6',
                color: '#fff',
                padding: '2em',
              }}
            >
              <h3 style={{ color: '#fff' }}>{lefttitle}</h3>
              <ul>
                {leftlist.map(item => (
                  <li key={item.text} className="is-size-5">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="column"
              style={{
                padding: '2em',
              }}
            >
              <h3 className="has-text-weight-semibold is-size-5">{maintext}</h3>
              <div className="columns is-mobile">
                <div className="column has-text-centered is-one-third">
                  <a href="mailto:bmulry@gmail.com">
                    <img src={email} alt="email" />
                    <h5>Email us at bmulry@gmail.com</h5>
                  </a>
                </div>
                <div className="column has-text-centered is-one-third">
                  <a
                    href="/docs/Volunteer_Handbook_jan2021.pdf"
                    download="Sojourn_Volunteer_Handbook.pdf"
                  >
                    <img src={pdfdownload} alt="pdf download" />
                    <h5>Download Volunteer Handbook</h5>
                  </a>
                </div>
                <div className="column has-text-centered is-one-third">
                  <a
                    href="/docs/Volunteer_Release.pdf"
                    download="Sojourn_Volunteer_Release.pdf"
                  >
                    <img src={pdfdownload} alt="pdf download" />
                    <h5>Download Release Form</h5>
                  </a>
                </div>
                <div className="column"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VolunteerPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  maintext: PropTypes.string.isRequired,
  lefttitle: PropTypes.string.isRequired,
};

const VolunteersPage = ({ data }) => {
  const { markdownRemark: md } = data;

  return (
    <Layout>
      <VolunteerPageTemplate
        title={md.frontmatter.title}
        image={md.frontmatter.image}
        maintext={md.frontmatter.maintext}
        lefttitle={md.frontmatter.lefttitle}
        leftlist={md.frontmatter.leftlist}
      />
    </Layout>
  );
};

VolunteersPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VolunteersPage;

export const volunteerPageQuery = graphql`
  query VolunteersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        maintext
        lefttitle
        leftlist {
          text
        }
      }
    }
  }
`;
