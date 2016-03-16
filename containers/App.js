import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'
import HackerNewsPage from '../components/HackerNewsPage'
import * as LoginActions from '../actions/loginActions'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    const { login, store } = this.props;
    if (login.isAuthorized) {

    }
    return (
      <div>
        <LoginPage login={login} store={store} actions={LoginActions}/>
        <HackerNewsPage />
      </div>
    )
  }
}

App.propTypes = {
  login: PropTypes.object.isRequired,
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
)(App)
