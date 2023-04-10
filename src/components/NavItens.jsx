import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavItens.css';

export default class NavItens extends Component {
  render() {
    const { state } = this.props;
    return (
      <nav className={ state ? "closebar" : "sidebar"}>
        <div>
          <Link to="/">
            Home
          </Link>
          <Link to="/bio">
            Bio
          </Link>
          <Link to="/portifolio">
            Portifólio
          </Link>
        </div>
        <div>
          <Link to="/contato">
            Contato
          </Link>
        </div>
      </nav>
    );
  }
}
