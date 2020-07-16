import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import { tokenToLocalStorage } from '../services/api';
import { gettingToken, getActionsQuestions, infoLogin } from '../redux/actions';

import './Login.css';

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
    const { login, token, questions, tokenState } = this.props;
    const { name, email } = this.state;
    login(name, email);
    token();
    tokenToLocalStorage();
    questions(tokenState);
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
          className="logion-button"
        >
          JOGAR!
        </button>
      </Link>
    );
  }

  render() {
    return (
      <div className="login-component">
        <form>
          <div>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
              data-testid="input-gravatar-email"
              placeholder="E-mail"
              className="login-input"
            />
          </div>
          <div>
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              data-testid="input-player-name"
              placeholder="Name"
              className="login-input"
            />
          </div>
          <div>{this.play()}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tokenState: state.tokenReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, name) => dispatch(infoLogin(email, name)),
  token: (token) => dispatch(gettingToken(token)),
  questions: (token) => dispatch(getActionsQuestions(token)),
});

Login.propTypes = {
  token: Proptypes.func.isRequired,
  login: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
