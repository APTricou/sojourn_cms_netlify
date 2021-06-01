import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry }) => {
  const frontmatter = entry.getIn(['data']).toJS();
  if (frontmatter) {
    return (
      <AboutPageTemplate
        title={frontmatter.title}
        text={frontmatter.text}
        founder={frontmatter.founder}
        founderImage={frontmatter.founderImage}
        founderText={frontmatter.founderText}
        boardOfDirectors={frontmatter.boardOfDirectors}
        boardText={frontmatter.boardText}
        volunteers={frontmatter.volunteers}
        volunteersimage={frontmatter.volunteersimage}
        volunteerstext={frontmatter.volunteerstext}
      />
    );
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
