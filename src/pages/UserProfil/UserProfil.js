import "./UserProfil.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import axios from "axios";
import TransactionPurple from "../../components/transaction/purple/TransactionPurple";

const UserProfil = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user);
  const [newFirstName, setNewFirstName] = useState(user.firstName);
  const [newLastName, setNewLastName] = useState(user.lastName);
  const dispatch = useDispatch();

  const nameChanger = () => {
    const data = {
      firstName: `${newFirstName === "" ? user.firstName : newFirstName}`,
      lastName: `${newLastName === "" ? user.lastName : newLastName}`,
    };

    axios
      .put("http://localhost:3001/api/v1/user/profile", data, {
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
      .then(() => {
        setNewFirstName("");
        setNewLastName("");
      })
      .catch(function (err) {
        console.log(err.message);
      });
  };
  return (
    <main className="main-user-profil">
      <div className="info-container">
        <h1 className="info-title">Welcome back</h1>
        <div className="input-layout">
          <input
            type="text"
            className="input-box"
            placeholder={user.firstName}
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
          />
          <input
            type="text"
            className="input-box"
            placeholder={user.lastName}
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
          />
        </div>
        <div className="btn-layout">
          <div className="half-first">
            <button onClick={nameChanger}>Save</button>
          </div>
          <div className="half-second">
            <Link to="/profil">Cancel</Link>
          </div>
        </div>
      </div>
      <div className="account-layout">
        <TransactionPurple />
        <TransactionPurple />
        <TransactionPurple />
      </div>
    </main>
  );
};
export default UserProfil;
