import React, { Component, PropTypes } from 'react'
import * as LoginActions from '../actions/loginActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
require("./Login.scss")

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mounting login page');
  }

  handleClick (event) {
    event.preventDefault();
    let tempState = {};
    // console.log('check', this.props);
    let authenticatedParams = this.authenticate();
    if (authenticatedParams) {
      this.props.route.store.dispatch(LoginActions.loginClicked());
    }
    tempState = this.props.route.store.getState();
    window.addEventListener("beforeunload", function () {
      document.querySelector(".hacker-news-form-wrap").classList.add("animate-out");
    });
    if (tempState.login.isAuthorized) {
      this.props.history.pushState({}, '/hackernews');
    }
  }

  authenticate () {
    if (this.refs.username.value === "sai" && this.refs.password.value === "sai") {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { login , actions, store} = this.props;
    console.log(this.props);
    return (
      <div className="background">
        <div className="login-form-wrap">
          <h1>Hacker News!</h1>
          <img width={168} height={84} src="http://www.1800pocketpc.com/wp-content/uploads/2014/12/Hacky-News-logo-Windows-Phone-700x437.jpg"/>
          <form className="login-form" action="#">
            <label className="form-fields">
              <input type="username" ref="username" required placeholder="Username"/>
              <input type="password" ref="password" required placeholder="Password"/>
            </label>
            <div className="button-login" onClick={this.handleClick.bind(this)}>
              <i className="fa fa-sign-in"></i>&nbsp;&nbsp;Login
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}
 function mapDispatchToProps(dispatch) {
   return bindActionCreators(LoginActions, dispatch)
 }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
