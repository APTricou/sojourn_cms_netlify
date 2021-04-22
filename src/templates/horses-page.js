import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import HorsesGrid from '../components/HorsesGrid';

export const HorsesPageTemplate = ({
  title,
  aboutTitle,
  aboutBlurb,
  horses,
}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
            <div className="content">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">
                {aboutTitle}
              </h3>
              <p>{aboutBlurb}</p>
            </div>
            <HorsesGrid gridItems={horses} />
          </div>
        </div>
      </div>
    </section>
  );
};

HorsesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired,
  aboutBlurb: PropTypes.string.isRequired,
  horses: PropTypes.array.isRequired,
};

const HorsesPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark;

  return (
    <Layout>
      <HorsesPageTemplate
        title={fm.title}
        aboutTitle={fm.aboutTitle}
        aboutBlurb={fm.aboutBlurb}
        horses={fm.horses}
      />
    </Layout>
  );
};

HorsesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HorsesPage;

export const horsesPageQuery = graphql`
  query HorsesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        aboutTitle
        aboutBlurb
        horses {
          image {
            childImageSharp {
              fluid(maxWidth: 100, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
      }
    }
  }
`;
