import React from 'react';

const Shot = ({ image }) => (
  <img alt="Shot" src={image} />
);

Shot.propTypes = {
  image: React.PropTypes.string.isRequired,
};

export default Shot;
