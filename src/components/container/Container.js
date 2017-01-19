import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/images/dribble-logo.png';
import './styles.scss';

const Container = ({ children }) => (
  <div>
    <header>
      <Link to="/"><img src={logo} alt="Logo" /></Link>
    </header>
    <main>
      {children}
    </main>
  </div>
);

Container.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Container;
