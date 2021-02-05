import React from "react";

import "./styles/avatar.css";

class avatarForm extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <div className="form-avatar">
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
              placeholder="First name"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              placeholder="Last name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              placeholder="walfret69@gmail.com"
            />
          </div>
          <div className="form-group">
            <label>Trabajo</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              placeholder="Job title"
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              placeholder="@example"
            />
          </div>
          <button onClick={this.handleClick}>Guardar</button>
          {this.props.error && <p>{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default avatarForm;
