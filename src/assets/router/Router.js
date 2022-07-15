import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfil from "../../pages/UserProfil/UserProfil";
import Homepage from "../../pages/Homepage/Homepage";
import SignIn from "../../pages/SignIn/SignIn";
import User from "../../pages/User/User";
import Transaction from "../../pages/Transaction/Transaction";

const Router = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/login"
        element={isAuth ? <Navigate replace to="/profil" /> : <SignIn />}
      />
      <Route
        path="/profil"
        element={isAuth ? <User /> : <Navigate replace to="/" />}
      />
      <Route
        path="/info"
        element={isAuth ? <UserProfil /> : <Navigate replace to="/" />}
      />
      <Route
        path="/transaction"
        element={isAuth ? <Transaction /> : <Navigate replace to="/" />}
      />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
