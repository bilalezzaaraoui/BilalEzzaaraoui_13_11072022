import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import React from "react";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
