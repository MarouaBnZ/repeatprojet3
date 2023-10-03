import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/PostsContext";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
function PostDetails({ title, body }) {
  const posts = useContext(postsContext);
  const { postId } = useParams();
  const post = posts.find((p) => {
    return p.id == postId;
  });

  if (post) {
    return (
      <>
        <h2> Post Details Pages</h2>
        <h1>{post.title}</h1>

        <p>{post.body}</p>
      </>
    );
  } else {
    return (
      <>
        <h1> The post with id : {postId} does not exist</h1>
      </>
    );
  }
}

export default PostDetails;
