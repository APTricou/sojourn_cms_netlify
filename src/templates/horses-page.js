import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const HorsesPageTemplate = ({ title, subtitle }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <h4>{subtitle}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HorsesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

const HorsesPage = ({ data }) => {
  const { markdownRemark: md } = data;

  return (
    <Layout>
      <HorsesPageTemplate
        title={md.frontmatter.title}
        subtitle={md.frontmatter.subtitle}
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
        subtitle
      }
    }
  }
`;
