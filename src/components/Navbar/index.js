import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo-Netflix.svg';
import { ReactComponent as AvatarIcon } from '../../assets/icons/avatar.svg';
import { ReactComponent as CaretDown } from '../../assets/icons/caret-down.svg';
import './index.scss';

export default class Navbar extends React.Component {
  state = {
    isDropdownActive: false,
  };
  dropdownClassNames = () => {
    if (this.state.isDropdownActive) {
      return 'menu active';
    }
    return 'menu';
  };
  handleDropdownActivate = () => {
    this.setState({ isDropdownActive: true });
  };
  handleDropdownDeactivate = () => {
    this.setState({ isDropdownActive: false });
  };
  render() {
    return (
      <nav>
        <div className="nav-container">
          <div className="left-container">
            <div className="logo">
              <Logo />
            </div>
            <ul className="nav-menu">
              <li className="active">Discovery</li>
              <li>Series TV</li>
              <li>Films</li>
              <li>Original</li>
              <li>Recents</li>
              <li>My List</li>
            </ul>
          </div>
          <div className="right-container">
            <div className="search-icon">
              <i class="fas fa-search" />
            </div>
            <div className="user-name">Peter Zheng</div>
            <div className="notification">
              <i class="fas fa-bell" />
              <span>2</span>
            </div>
            <div
              className="dropdown-menu"
              onMouseEnter={this.handleDropdownActivate}
              onMouseLeave={this.handleDropdownDeactivate}
            >
              <AvatarIcon />
              <CaretDown />
              <div className={this.dropdownClassNames()}>
                <div className="accounts">accounts</div>
                <div className="links">link</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
