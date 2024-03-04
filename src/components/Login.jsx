import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./store/Slices/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            // Assuming the server responds with a token upon successful authentication
            localStorage.setItem("isAuth", true);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify({ username }));
            dispatch(login(username)); // Adjust based on your Redux action
            navigate("/profile");
          } else {
            alert("Login failed. Please check your username and password.");
          }
        })
        .catch((error) => {
          console.error("Login error:", error);
          alert("An error occurred. Please try again later.");
        });
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">
              <span>Login</span>
            </button>
          </div>
          <div className="mt-3">
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
