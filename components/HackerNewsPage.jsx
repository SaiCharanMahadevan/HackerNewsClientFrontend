import React, { Component, PropTypes } from 'react'
import * as LoginActions from '../actions/loginActions'
import * as HackerNewsActions from '../actions/hackerNewsActions'
import HackerNewsCard from './HackerNewsCard.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// import data from '../mocks/HackerNews.json'
require("./HackerNews.scss")
require("./Login.scss")
require("./Spinner.scss")
require('velocity-animate');
require('velocity-animate/velocity.ui');
import { VelocityTransitionGroup } from 'velocity-react';

class HackerNewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isFetching: false
    }
  }

  componentDidMount() {
    let tempState = this.props.route.store.getState();
    let hackerState = this.props.hackernews;

    console.log('hey');
    if (!tempState.login.isAuthorized) {
      this.props.history.pushState({}, '/');
    }
  }

  componentDidUpdate(){
    let updatedHackerState = this.props.hackernews;
  }

  componentWillReceiveProps(nextProps) {
  }

  handleClick(event) {
    event.preventDefault();
    document.querySelector(".background").classList.add("animate-out");
    this.props.route.store.dispatch(LoginActions.logOutClicked());
    let tempState = this.props.route.store.getState();
    if (!tempState.login.isAuthorized) {
      this.props.history.pushState({}, '/');
    }
  }



  render() {
    const { hackernews , actions, store} = this.props;

    return (
      <div className="background">
        <VelocityTransitionGroup runOnMount={true} enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          <HackerNewsCard
            data={this.props.hackernews.data}
            dataIndex={this.props.hackernews.dataIndex}
            store={this.props.route.store}
            currPage={this.props.hackernews.currPage}
            history={this.props.history}
            />
        </VelocityTransitionGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    hackernews: state.hackernews
  }
}
 function mapDispatchToProps(dispatch) {
   return bindActionCreators(HackerNewsActions, LoginActions, dispatch)
 }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackerNewsPage)
