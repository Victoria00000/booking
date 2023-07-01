import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import axios from "axios";
import "./login.css";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          className="lInput"
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />

        <input
          className="lInput"
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />

        <button disabled={loading} className="lButton" onClick={handleLogin}>
          {" "}
          Login{" "}
        </button>

        {error && <div> {error.message} </div>}
      </div>
    </div>
  );
};
