import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  const html = entry.getIn(['html']).toJS();
  if (data) {
    return <AboutPageTemplate title={data.title} content={html} />;
  } else {
    return <div>Loading...</div>;
  }
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AboutPagePreview;
