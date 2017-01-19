/* eslint-disable react/no-danger */
import React from 'react';

import insertHtml from '../../services/insertHtml';
import styles from './styles.scss';

const MAX_LEN = 250;

const parseDescription = (description) => {
  if (description && description.length > MAX_LEN) {
    return insertHtml(`${description.substring(0, MAX_LEN)}...`);
  }
  return insertHtml(description);
};

const ShotDescription = ({ showDescription, description, title }) => {
  if (showDescription) {
    return (
      <div className={styles.container}>
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={parseDescription(description)} />
      </div>
    );
  }
  return null;
};

ShotDescription.propTypes = {
  showDescription: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default ShotDescription;
