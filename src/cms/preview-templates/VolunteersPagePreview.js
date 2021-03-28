import React from 'react';
import PropTypes from 'prop-types';
import { VolunteersPageTemplate } from '../../templates/volunteers-page';

const VolunteersPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryTestimonials = entry.getIn(['data', 'testimonials']);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  return (
    <VolunteersPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      maintext={entry.getIn(['data', 'maintext'])}
      lefttitle={entry.getIn(['data', 'lefttitle'])}
      leftlist={{ items }}
    />
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default VolunteersPagePreview;
