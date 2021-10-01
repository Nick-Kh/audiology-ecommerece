import React from 'react';
import PropTypes from 'prop-types';
import './Rating.scss'

const Rating = ({ value, text, color }) => {
  const NUM_OF_STARS = 5;
  const starArr = Array.from({length: NUM_OF_STARS}, (_, i) => i + 1);

  const getStarClass = (index) => {
    return  value >= index ? 
            "fas fa-star" :
            value >= index - 0.5 ?
            "fas fa-star-half-alt" :
            "far fa-star";
  }

  return (
    <div className="rating">
      {starArr.map(idx => (
        <span key={idx}>
          <i style={{color}} className={getStarClass(idx)}></i>
        </span>
      ))}
      <span>{text || ''}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825'
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Rating;
