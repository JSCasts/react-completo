import React from 'react';

import styles from './styles.scss';

const Shot = ({ image, date, likesCount, viewsCount }) => (
  <div className={styles.container}>
    <img alt="Shot" src={image} />
    <div className={styles.left}>
      <span className={styles.calendar}>{new Date(date).toISOString().split('T')[0]}</span>
    </div>
    <div className={styles.right}>
      <span className={styles.views}>{viewsCount}</span>
      <span className={styles.likes}>{likesCount}</span>
    </div>
  </div>
);

Shot.propTypes = {
  image: React.PropTypes.string.isRequired,
  viewsCount: React.PropTypes.number.isRequired,
  likesCount: React.PropTypes.number.isRequired,
  date: React.PropTypes.string.isRequired,
  /*description: React.PropTypes.string.isRequired,*/
  /*title: React.PropTypes.string.isRequired,*/
};

export default Shot;
