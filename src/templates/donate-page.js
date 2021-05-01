import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import ppbutton from '../img/donate-with-paypal-button.png';

export const DonatePageTemplate = ({
  title,
  listTitle,
  item1,
  addressline1,
  addressline2,
  item2,
  item3,
  item4,
  link4,
  item5,
  link5,
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-10 is-offset-1">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <h4 className="title is-size-5 has-text-weight-bold">
              {listTitle}
            </h4>
            <hr />
            <p>1. {item1}</p>
            <p>. {addressline1}</p>
            <p>. {addressline2}</p>
            <p>2. {item2}</p>
            <p>
              <a href="/volunteers">Volunteer Page</a>
            </p>
            <p>3. {item3}</p>
            <p>
              <a href="/contact">Contact Page</a>
            </p>
            <p>4. {item4}</p>
            <p>
              <a href={link4}>Amazon Smile</a>
            </p>
            <p>5. {item5}</p>
            <a href={link5} target="_blank" rel="noopener noreferrer">
              <img
                src={ppbutton}
                alt="Paypal Donate Button"
                style={{
                  width: '10em',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

DonatePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  listTitle: PropTypes.string,
  item1: PropTypes.string,
  addressline1: PropTypes.string,
  addressline2: PropTypes.string,
  item2: PropTypes.string,
  item3: PropTypes.string,
  item4: PropTypes.string,
  link4: PropTypes.string,
  item5: PropTypes.string,
  link5: PropTypes.string,
};

const DonatePage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark;

  return (
    <Layout>
      <DonatePageTemplate
        title={fm.title}
        listTitle={fm.listTitle}
        item1={fm.item1}
        addressline1={fm.addressline1}
        addressline2={fm.addressline2}
        item2={fm.item2}
        item3={fm.item3}
        link3={fm.link3}
        item4={fm.item4}
        link4={fm.link4}
        item5={fm.item5}
        link5={fm.link5}
      />
    </Layout>
  );
};

DonatePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DonatePage;

export const donatePageQuery = graphql`
  query DonatePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "donate-page" } }) {
      frontmatter {
        title
        listTitle
        addressline1
        addressline2
        item1
        item2
        item3
        item4
        link4
        item5
        link5
      }
    }
  }
`;
