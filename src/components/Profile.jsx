import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./store/Slices/authSlice";

const Profile = () => {
  //called here
  const userData = useSelector((state) => state.auth); // Moved here to access `user` throughout the component
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const parseUser = JSON.parse(user);
  const HandleLogout = () => {
    //   dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
    dispatch(logout());
    navigate("/");
  };

  console.log(userData);
  return (
    <div className="container">
      <header className="jumbotron d-flex justify-content-between">
        <h3>
          <strong>{userData?.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong>
      </p>
      <p>
        <strong>Email:{parseUser?.email}</strong>
      </p>
      <button onClick={HandleLogout} className="btn btn-secondary">
        {" "}
        Logout
      </button>
    </div>
  );
};

export default Profile;
