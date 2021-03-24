import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const VolunteerPageTemplate = ({
  image,
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

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
      <PageContent className="content" content={content} />
    </div>
  );
};

VolunteerPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const VolunteersPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <VolunteerPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
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
      }
    }
  }
`;
