import React from "react";
import PropTypes from "prop-types";
import "../styles/main.scss";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="body">{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
