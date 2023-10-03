import { Link } from "react-router-dom";
function Hello() {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>Welcome to React Router</h2>

      <Link to="/home">
        <div
          style={{
            background: "orange",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <h1>Go to home page</h1>
        </div>
      </Link>
    </>
  );
}

export default Hello;
