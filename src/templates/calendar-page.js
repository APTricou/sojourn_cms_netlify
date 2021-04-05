import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const CalendarPageTemplate = ({ title, subtitle }) => {
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

CalendarPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

const CalendarPage = ({ data }) => {
  const { markdownRemark: md } = data;

  return (
    <Layout>
      <CalendarPageTemplate
        title={md.frontmatter.title}
        subtitle={md.frontmatter.subtitle}
      />
    </Layout>
  );
};

CalendarPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CalendarPage;

export const calendarPageQuery = graphql`
  query CalendarPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
