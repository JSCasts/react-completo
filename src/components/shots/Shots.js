import React, { Component } from 'react';

import getShots from '../../services/shots';

class Shots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: [],
    };
  }

  componentWillMount() {
    getShots().then(response => this.setState({ shots: response.data }));
  }

  render() {
    return (
      <div>
        { this.state.shots.map(shot => <img alt="Shot" src={shot.images.normal} />)}
      </div>
    );
  }
}

export default Shots;
