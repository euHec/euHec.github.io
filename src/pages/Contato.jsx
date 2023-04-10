import { Component } from 'react';
import Header from '../components/Header';
import FormContact from '../components/FormContact';

export default class Contato extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Contato</h1>
        <FormContact />
      </>
    );
  }
}
