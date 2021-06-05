import React from 'react';
import PropTypes from 'prop-types';
import pdfdownload from '../img/pdfdownload_white.svg';

const EventBannerDocuments = ({ documents }) => {
  if (documents.length > 0) {
    return (
      <div
        className="column"
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        {documents.map(document => {
          console.log(document);
          return (
            <div className="has-text-centered" style={{ maxWidth: '5rem' }}>
              <a href={document.url.publicURL} download={document.url.name}>
                <img src={pdfdownload} alt="pdf download" />
                <h5>{document.url.name}</h5>
              </a>
            </div>
          );
        })}
      </div>
    );
  } else return null;
};

EventBannerDocuments.propTypes = {
  events: PropTypes.array,
};

export default EventBannerDocuments;
