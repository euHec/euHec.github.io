import { Component } from 'react';
import NavItens from '../components/NavItens';
import { FaGripLines, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { controlSidebar } from '../redux/actions';
import '../styles/NavItens.css';

class Header extends Component {
  render() {
    const { clicked, dispatch } = this.props;
    return (
      <header>
      { clicked ?
        <FaTimes size="30" className="close-nav" onClick={ () => dispatch(controlSidebar(!clicked)) } /> :
        (<FaGripLines size="30" className="open-nav" onClick={ () => dispatch(controlSidebar(!clicked)) } />)}
      <NavItens state={ clicked }/>
    </header>
    );
  }
}

const mapStateToProps = ({clickReducer}) => ({
  clicked: clickReducer.clicked
})

export default connect(mapStateToProps)(Header)