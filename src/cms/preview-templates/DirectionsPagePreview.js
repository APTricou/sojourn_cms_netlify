import React from 'react';
import PropTypes from 'prop-types';
import { DirectionsPageTemplate } from '../../templates/directions-page';

const DirectionsPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);
  if (data) {
    return (
      <DirectionsPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        address={data.address}
        contact={data.contact}
        hours={data.hours}
        maps={data.maps}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

DirectionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default DirectionsPagePreview;
