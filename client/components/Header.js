import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import query from "../queries/header_query";
import mutation from "../mutations/header_mutation";

class Header extends Component {
  onLogout() {
    console.log("logout");

    this.props.mutate({
      refetchQueries: [{ query }]
    });

    // .then(() => this.props.data.refetch());
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) return <div>loading...</div>;
    if (user) {
      return (
        <li>
          <a onClick={() => this.onLogout()}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/singup">Signup</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.data);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/">Home</Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
