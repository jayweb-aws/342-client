import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./store/Slices/authSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // Initialize with an empty string
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/register", {
      // Update with your server URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful registration here
        localStorage.setItem("isAuth", true); // Be cautious with what you store in localStorage
        localStorage.setItem("user", JSON.stringify({ username, email })); // Storing passwords is not recommended
        ///, email, password
        console.log(data);
        console.log(username);
        dispatch(login(username)); // Adjust based on your auth flow
        navigate("/profile"); // Or navigate to login page
      })
      .catch((error) => {
        console.error("Registration error:", error);
        alert("An error occurred during registration. Please try again.");
      });
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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
            <button className="btn btn-primary btn-block">
              <span>Registration</span>
            </button>
          </div>
          <div className="mt-3">
            <p>
              Already have an account? <Link to="/">Login Here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
