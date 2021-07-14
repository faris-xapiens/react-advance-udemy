import React, { Component } from "react";
import {connect} from 'react-redux'

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map((comment, index) => {
      return <li key={index}>{comment}</li>;
    });
  };
  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({comments}) => {
  return { comments };
}

export default connect(mapStateToProps)(CommentList);
