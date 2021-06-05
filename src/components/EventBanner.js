import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import EventBannerDocuments from './EventBannerDocuments';

const EventBanner = ({ events }) => (
  <div className="section">
    <div className="columns">
      {events.map(event => (
        <div key={event.text} className="column">
          <a href={event.link} download>
            <div
              className="columns"
              style={{
                background: '#0007a6',
                margin: '5px',
                borderRadius: '15px',
              }}
            >
              <div className="column">
                <h1 className="title whitetext">{event.title}</h1>
                <p className="whitetext">{event.text}</p>
              </div>
              {/* {!!event.image ? (
                <div
                  className="column"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <PreviewCompatibleImage imageInfo={event} />;
                </div>
              ) : (
                <></>
              )} */}
              <EventBannerDocuments documents={event.documents} />
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

EventBanner.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      documents: PropTypes.array,
      link: PropTypes.string,
      picture: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
};

export default EventBanner;
