import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import pdfdownload from '../img/pdfdownload.svg';
// import email from '../img/mail.svg';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const ContactPageTemplate = ({
  title,
  text,
  subtitle,
  parentForm,
}) => {
  console.log(parentForm)
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p className="is-size-5">{subtitle}</p>
              <p className="is-size-5">{text}</p>
              <p className="is-size-5">(708) 539-3078</p>
              <p className="is-size-5">info@sojourntrc.org</p>
              <p className="is-size-5">Next we do a consultation to determine your needs.</p>
              <div className="has-text-centered" style={{ maxWidth: '10rem' }}>
                <a href={parentForm.publicURL} download={parentForm.name}>
                  <img src={pdfdownload} alt="pdf download" />
                  <h5>{parentForm.name}</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  parentForm: PropTypes.oneOfType([PropTypes.string,PropTypes.object]),
  };

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        text={frontmatter.text}
        parentForm={frontmatter.parentForm}
        />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        subtitle
        text
        parentForm {
          name
          extension
          publicURL
        }
      }
    }
  }
`;
