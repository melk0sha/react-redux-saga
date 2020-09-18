import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p>There are no posts</p>;
  }
  return syncPosts.map((post) => <Post post={post} key={post.id} />);
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.syncPosts,
  };
};

export default connect(mapStateToProps, null)(Posts);
