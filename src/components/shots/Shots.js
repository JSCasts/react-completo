import React, { Component } from 'react';

import Shot from '../shot/Shot';
import getShots from '../../services/shots';

const PAGE = 1;
const PER_PAGE = 12;

class Shots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: [],
      page: PAGE,
      perPage: PER_PAGE,
    };
  }

  componentWillMount() {
    getShots(this.state.page, this.state.perPage)
      .then(response => this.setState({ shots: response.data }));
  }

  render() {
    return (
      <div>
        { this.state.shots.map(shot =>
          <Shot
            key={shot.id}
            id={shot.id}
            image={shot.images.teaser}
            date={shot.created_at}
            title={shot.title}
            description={shot.description}
            viewsCount={shot.views_count}
            likesCount={shot.likes_count}
          />)
        }
      </div>
    );
  }
}

export default Shots;
