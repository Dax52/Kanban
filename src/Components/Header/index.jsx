import React from 'react';
import User from '../User';

import './index.css';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userActive: false,
    };
  }
  onClickUser = () => {
    this.setState({
      userActive: !this.state.userActive,
    });
  };
  render() {
    return (
      <header className="header">
        <h1 className="logo">Awesome Kanban Board</h1>
        <User active={this.state.userActive} onClick={this.onClickUser} />
      </header>
    );
  }
}
export default Header;
