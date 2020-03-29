import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

import mutation from "../mutations/Signup";
import AuthForm from "./AuthForm";
import query from "../queries/current_user";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push("/dashboard");
    }
  }

  onSubmit(email, password) {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(err => err.message);
        this.setState({
          errors
        });
      });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm
          errors={errors}
          onSubmit={(email, password) => this.onSubmit(email, password)}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(SignupForm));
