import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const CalendarPageTemplate = ({
  title,
  calendarBlurb,
  calendarPicture,
  calendarLink,
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
          <div className="section">
            <PreviewCompatibleImage imageInfo={calendarPicture} />
            <h1 className="title is-size-4 has-text-weight-bold is-bold-light">
              <a href={calendarLink} target="_blank" rel="noopener noreferrer">
                Calendar Link for Most Updated Calendar
              </a>
            </h1>
          </div>
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
        calendarLink
      }
    }
  }
`;
