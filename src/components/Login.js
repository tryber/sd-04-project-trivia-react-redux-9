import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import { getActionsQuestions, infoLogin } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };

    this.dispatchToProps = this.dispatchToProps.bind(this);
  }

  dispatchToProps() {
    const { /* dataQuestions, */ login } = this.props;
    const { name, email } = this.state;
    login(name, email);
    // dataQuestions();
  }

  play() {
    const { name, email } = this.state;
    let disable = false;
    if (name.length < 2 || email.length < 3) {
      disable = true;
    }
    return (
      <Link to="/question">
        <button
          type="button"
          data-testid="btn-play"
          onClick={this.dispatchToProps}
          disabled={disable}
        >
          JOGAR!
        </button>
      </Link>
    );
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
              data-testid="input-gravatar-email"
              placeholder="Email-Login"
            />
          </div>
          <div>
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              data-testid="input-player-name"
              placeholder="nome"
            />
          </div>
          <div>{this.play()}</div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  /* dataQuestions: (token) => dispatch(getActionsQuestions(token)), */
  login: (email, name) => dispatch(infoLogin(email, name)),
});

Login.propTypes = {
  dataQuestions: Proptypes.func.isRequired,
  login: Proptypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
