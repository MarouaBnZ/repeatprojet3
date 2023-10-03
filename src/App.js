import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { postsContext } from "./contexts/PostsContext";
import NotFound from "./NotFound";

// librairie : React Router dom : contient plusieurs packages
function App() {
  let postsData = [
    {
      id: 1,
      title: " First Post ",
      body: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,asperiores.",
    },

    {
      id: 2,
      title: " Second Post ",
      body: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,asperiores.",
    },
    {
      id: 3,
      title: " Third Post ",
      body: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,asperiores.",
    },
  ];
  return (
    <postsContext.Provider value={postsData}>
      <div className="App">
        {/* Routes */}
        <div style={{ fontSize: "30px" }}>
          <Link to="/home">
            <button style={{ fontSize: "30px" }}>Home</button>
          </Link>
          <Link to="/hello">
            <button style={{ fontSize: "30px" }}>Hello</button>
          </Link>

          <Link to="/posts">
            <button style={{ fontSize: "30px" }}>Posts</button>
          </Link>
        </div>
        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/postdetails/:postId" element={<PostDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
