import React from 'react';
import PropTypes from 'prop-types';
import { VolunteerPageTemplate } from '../../templates/volunteers-page';

const VolunteersPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <VolunteerPageTemplate
        image={data.image}
        title={data.title}
        maintext={data.maintext}
        lefttitle={data.lefttitle}
        leftlist={data.items}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

VolunteersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default VolunteersPagePreview;
