import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const CalendarPageTemplate = ({
  title,
  calendarBlurb,
  calendarPicture,
  block1,
  block2,
}) => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <h4 className="title is-size-5 has-text-weight-bold is-bold-light">
              {calendarBlurb}
            </h4>
          </div>
          <div style={{ justifyContent: 'center' }}>
            <PreviewCompatibleImage imageInfo={calendarPicture} />
            <a href={block1.publicURL}>
              <h5 className="has-text-centered is-size-3">{block1.name}</h5>
            </a>
            <a href={block2.publicURL}>
              <h5 className="has-text-centered is-size-3">{block2.name}</h5>
            </a>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

CalendarPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  calendarBlurb: PropTypes.string,
  calendarPicture: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  calendarLink: PropTypes.string,
  block1: PropTypes.string,
  block2: PropTypes.string,
};

const CalendarPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark;

  return (
    <Layout>
      <CalendarPageTemplate
        title={fm.title}
        calendarBlurb={fm.calendarBlurb}
        calendarPicture={fm.calendarPicture}
        calendarLink={fm.calendarLink}
        block1={fm.block1}
        block2={fm.block2}
      />
    </Layout>
  );
};

CalendarPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CalendarPage;

export const calendarPageQuery = graphql`
  query CalendarPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "calendar-page" } }) {
      frontmatter {
        title
        calendarBlurb
        calendarPicture {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        block1 {
          name
          extension
          publicURL
        }
        block2 {
          name
          extension
          publicURL
        }
      }
    }
  }
`;
