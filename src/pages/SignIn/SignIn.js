import axios from "axios";
import { useDispatch } from "react-redux";
import { Fragment, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { authActions } from "../../store/auth";
import "./SignIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        const data = response.data.body.token;

        if (data) {
          dispatch(authActions.login(data));
        }
      })
      .catch(function (err) {
        console.log(err.message);
      });
  };

  return (
    <Fragment>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FaUserCircle />
          <h1>Sign In</h1>
          <form onSubmit={loginHandler}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" required />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </Fragment>
  );
};

export default SignIn;
