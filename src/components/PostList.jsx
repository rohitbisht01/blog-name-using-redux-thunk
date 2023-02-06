import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    // action creator
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostList);
