import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const HorsesGrid = ({ gridItems }) => (
  <div className="columns is-multiline is-centered is-1">
    {gridItems.map(item => (
      <div key={item.text} className="column">
        <section
          style={{
            width: '230px',
            height: '120px',
            border: '1px black solid',
            padding: '15px',
          }}
        >
          <div className="has-text-centered">
            <div
              style={{
                width: '200px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p className="has-text-centered">{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

HorsesGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default HorsesGrid;
