import React, { Component } from "react";
import { Post } from "../../components/Post/Post";

class Posts extends Component {
  state = {
    showLoading: false,
    posts: [
      { id: 1, title: "demo post 1", content: "Lorem ipsum 1", count: 1 },
      { id: 2, title: "demo post 2", content: "Lorem ipsum 2", count: 1 },
      { id: 3, title: "demo post 3", content: "Lorem ipsum 3", count: 1 }
    ]
  };

  PostClickHandler = (e, id) => {
    const postsCopy = [...this.state.posts];
    const postIndex = postsCopy.findIndex(el => el.id === id);

    const postDeepCopy = { ...postsCopy[postIndex] };

    postDeepCopy.count++;

    postsCopy[postIndex] = postDeepCopy;
    this.setState({
      posts: postsCopy
    });
  };

  render() {
    return (
      <div className="Posts">
        <h1>All of posts!</h1>

        {this.state.posts.map((item, i, s) => {
          return (
            <Post
              clickHandler={e => this.PostClickHandler(e, item.id)}
              key={item.id}
              item={item}
            ></Post>
          );
        })}
      </div>
    );
  }
}

export default Posts;
