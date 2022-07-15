import "./User.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TransactionGreen from "../../components/transaction/green/TransactionGreen";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import axios from "axios";

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  useEffect(() => {
    if (isAuth) {
      axios
        .post("http://localhost:3001/api/v1/user/profile", "", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          const user = response.data.body;
          dispatch(
            userActions.newUser({
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
            })
          );
        })
        .catch(function (err) {
          console.log(err.message);
        });
    }
  }, [isAuth, token]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {`${firstName} ${lastName}`}
        </h1>
        <Link to="/info" className="edit-button">
          Edit Name
        </Link>
      </div>
      <TransactionGreen checking="8349" amount="2,082.79" />
      <TransactionGreen checking="6712" amount="10,928.42" />
      <TransactionGreen checking="8349" amount="184.30" />
    </main>
  );
};
export default User;
