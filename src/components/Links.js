import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="btn-ranking" to="/ranking">
          VER RANKING
        </Link>
        <Link
          data-testid="btn-play-again"
          to="/"
        >
          JOGAR NOVAMENTE
        </Link>
      </div>
    );
  }
}

export default Links;
