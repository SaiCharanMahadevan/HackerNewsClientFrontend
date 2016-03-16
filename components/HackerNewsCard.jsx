import React, { Component, PropTypes } from 'react'
import * as LoginActions from '../actions/loginActions'
import * as HackerNewsActions from '../actions/hackerNewsActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
require("./HackerNews.scss")
require("./Login.scss")
require("./Spinner.scss")

class HackerNewsCard extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.props);
    this.props.store.dispatch(LoginActions.logOutClicked());
    let tempState = this.props.store.getState();
    if (!tempState.login.isAuthorized) {
      this.props.history.pushState({}, '/');
    }
  }

  handleNavigation(index) {
    event.preventDefault();
    this.setState({
      isFetching: true
    })
    switch(index) {
      case 'next':
        this.props.history.pushState({}, '/hackernews');
        this.props.store.dispatch(HackerNewsActions.nextClicked());
        break;
      case 'previous':
        this.props.store.dispatch(HackerNewsActions.prevClicked());
        break;
      default:
        break;
    }
  }

  titleTag() {
    let titleContent = {};
    titleContent = (
      <div className="story-title animate-in">
        <h4><a href={this.props.data.story[this.props.dataIndex].url} target="_blank">{this.props.data.story[this.props.dataIndex].content}</a></h4>
      </div>
    );

    return titleContent;
  }

  commentTag() {
    let commentContent = {};
    commentContent = (
      <div className="comments animate-in">
        <br/>
        <span id="author" className="author">by {this.props.data.story[this.props.dataIndex].by}</span>
        <span id="post-time" className="post-time">{this.props.data.story[this.props.dataIndex].post_time}</span>
        <div className="comment-item">
          {this.props.data.story[this.props.dataIndex].comments.content}
          <div className="reply-item">
            <span id="author" className="author">by {this.props.data.story[this.props.dataIndex].by}</span>
            <span id="post-time" className="post-time">{this.props.data.story[this.props.dataIndex].post_time}</span>
            <hr className="hr"/>
            <div>
              {this.props.data.story[this.props.dataIndex].comments.content}
            </div>
          </div>
          <div className="reply-item">
            <span id="author" className="author">by {this.props.data.story[this.props.dataIndex].by}</span>
            <span id="post-time" className="post-time">{this.props.data.story[this.props.dataIndex].post_time}</span>
            <hr/>
            <div>
              {this.props.data.story[this.props.dataIndex].comments.content}
            </div>
          </div>
        </div>
        <hr/>
        <span id="author" className="author">by {this.props.data.story[this.props.dataIndex].by}</span>
        <span id="post-time" className="post-time">{this.props.data.story[this.props.dataIndex].post_time}</span>
        <div className="comment-item">
          {this.props.data.story[this.props.dataIndex].comments.content}
        </div>
        <hr/>
        <div className="comment-item">
          {this.props.data.story[this.props.dataIndex].comments.content}
        </div>
        <hr/>
        <div className="comment-item">
          {this.props.data.story[this.props.dataIndex].comments.content}
        </div>
        <hr/>
      </div>
    );

    return commentContent;
  }

  render() {
    let hackerNewsCard = (
      <div className="hacker-news-form-wrap animate-in">
        <div>
          { this.props.data ?
            <div>
              {this.titleTag()}
              {this.commentTag()}
            </div>
            : <div className="spinner"></div>
          }
        </div>
        <div className="button-logout" onClick={this.handleClick.bind(this)}>
          <i className="fa fa-sign-out"></i>&nbsp;&nbsp;Logout
        </div>
        {this.props.currPage !== 1 ?
          <div className="previous" onClick={this.handleNavigation.bind(this, 'previous')}>
            <i className="fa fa-arrow-left"></i>
          </div>
            : null
        }
        {this.props.data ?
          this.props.data.story[this.props.dataIndex + 1] ?
            <div className="next" onClick={this.handleNavigation.bind(this, 'next')}>
              <i className="fa fa-arrow-right"></i>
            </div>
            : null
          : null
        }
      </div>
    )
    return(
      <div>
        {hackerNewsCard}
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
)(HackerNewsCard)
