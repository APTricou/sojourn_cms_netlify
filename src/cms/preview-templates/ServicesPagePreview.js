import React from 'react';
import PropTypes from 'prop-types';
import { ServicesPageTemplate } from '../../templates/services-page';

const ServicesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);
  return (
    <ServicesPageTemplate
      image={data.image}
      title={data.title}
      heading={data.heading}
      description={data.description}
      intro={data.intro || { blurbs: [] }}
      main={data.main}
      fullImage={data.full_image}
    />
  );
};

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ServicesPagePreview;
