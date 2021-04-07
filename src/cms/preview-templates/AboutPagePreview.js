import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return <AboutPageTemplate title={data.title} content={data.content} />;
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
