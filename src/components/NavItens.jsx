import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavItens.css';
import { controlSidebar } from '../redux/actions';
import { connect } from 'react-redux';

class NavItens extends Component {
  render() {
    const { clicked, dispatch } = this.props;
    return (
      <nav className={ clicked ? "closebar" : "sidebar"}>
        <div>
          <Link to="/meu-portifolio" onClick={ () => dispatch(controlSidebar())} >
            Home
          </Link>
          <Link to="/bio" onClick={ () => dispatch(controlSidebar())} >
            Bio
          </Link>
          <Link to="/portifolio" onClick={ () => dispatch(controlSidebar())} >
            Portifólio
          </Link>
        </div>
        <div>
          <Link to="/contato" onClick={ () => dispatch(controlSidebar())} >
            Contato
          </Link>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({clickReducer}) => ({
  clicked: clickReducer.clicked
})

export default connect(mapStateToProps)(NavItens)