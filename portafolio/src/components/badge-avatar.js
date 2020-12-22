import React from 'react';

import nave from './images/nave-espacial.svg'
import './styles/avatar.css';
import Gravatar from './gravatar'


class avatarBadge extends React.Component {
  render() {
    return (
      <div className="container-avatar">
        <div className="avatar_header">
          <img src={nave} alt="" />
        </div>

        <div className="avatar_section-name">
        <Gravatar email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="avatar_section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="avatar_footer">{this.props.email}</div>
      </div>
    );
  }
}

export default avatarBadge;