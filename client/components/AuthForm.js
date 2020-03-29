import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { email, password } = this.state;
    const { errors } = this.props;

    return (
      <div className="row">
        <form
          className="col s6"
          onSubmit={() => this.props.onSubmit(email, password)}
        >
          <div className="input-field">
            <input
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
          </div>
          <div className="errors">
            {errors.map(err => (
              <div key={err}>{err}</div>
            ))}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}
