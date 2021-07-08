import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const AboutPageTemplate = ({
  title,
  text,
  founder,
  founderImage,
  founderText,
  secondaryImage,
  secondaryText,
  boardOfDirectors,
  boardText,
  volunteers,
  volunteersimage,
  volunteerstext,
}) => {
  console.log(founderImage);
  console.log(volunteersimage);

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p className="is-size-5">{text}</p>
              <h1>{founder}</h1>
              <div className="section columns">
                <div className="column is-5">
                  <PreviewCompatibleImage imageInfo={founderImage} />
                </div>
                <div className="column">
                  <p className=" is-size-5">{founderText}</p>
                </div>
              </div>
              <div className="section columns">
                <div className="column is-5">
                  <PreviewCompatibleImage imageInfo={secondaryImage} />
                </div>
                <div className="column">
                  <p className=" is-size-5">{secondaryText}</p>
                </div>
              </div>
              <div>
                <h1>{boardOfDirectors}</h1>
                <div className="section">
                  <p className="is-size-5">{boardText}</p>
                </div>
              </div>
              <h1>{volunteers}</h1>
              <div className="section">
                <PreviewCompatibleImage imageInfo={volunteersimage} />
              </div>
              <p className="is-size-5">{volunteerstext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  founder: PropTypes.string,
  founderImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  founderText: PropTypes.string,
  secondaryImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  secondaryText:PropTypes.string,
  boardOfDirectors: PropTypes.string,
  boardText: PropTypes.string,
  volunteers: PropTypes.string,
  volunteersimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  volunteerstext: PropTypes.string,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        text={frontmatter.text}
        founder={frontmatter.founder}
        founderImage={frontmatter.founderImage}
        founderText={frontmatter.founderText}
        secondaryImage={frontmatter.secondaryImage}
        secondaryText={frontmatter.secondaryText}
        boardOfDirectors={frontmatter.boardOfDirectors}
        boardText={frontmatter.boardText}
        volunteers={frontmatter.volunteers}
        volunteersimage={frontmatter.volunteersimage}
        volunteerstext={frontmatter.volunteerstext}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        text
        founder
        founderImage {
          childImageSharp {
            fluid(maxWidth: 256, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        founderText
        secondaryImage {
          childImageSharp {
            fluid(maxWidth: 256, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondaryText
        boardOfDirectors
        boardText
        volunteers
        volunteersimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        volunteerstext
      }
    }
  }
`;
