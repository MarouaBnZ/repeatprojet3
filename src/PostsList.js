import { Link } from "react-router-dom";
import { postsContext } from "./contexts/PostsContext";
import { useContext } from "react";

function PostsList() {
  const posts = useContext(postsContext);
  let postsLists = posts.map((post) => {
    return (
      <Link key={post.id} to={`/postdetails/${post.id}`}>
        <div
          key={post.id}
          style={{ background: "orange", padding: "20px", marginTop: "10px" }}
        >
          <h1> {post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{postsLists}</>;
}

export default PostsList;
