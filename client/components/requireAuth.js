import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

import currentUserQuery from "../queries/current_user";

export default WrappedComponent => {
  class requireAuth extends Component {
    componentWillUpdate(nextProps, nextState) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(currentUserQuery)(requireAuth);
};
