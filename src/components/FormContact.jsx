import { Component } from 'react';
import '../styles/FormContact.css'
import formImg from '../imagens/form.svg'
export default class FormContact extends Component {
  state = {
    name: '',
    email: '',
    number: '',
    agreed: false,
  }

  handleChanges = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: '', email: '', number: '', agreed: false})
  }

  render() {
    const { agreed, email, name, number } = this.state;
    return (
      <div className="area-form">
        <div>
          <h1 className="title-form" >Solicitar contato</h1>
          <img src={formImg} alt="svg"/>
        </div>
        <form action="https://formsubmit.co/hectorsouzass@gmail.com" method='POST' onSubmit={ this.onSubmit }>
          <input type="text" placeholder='digite seu nome' value={ name } name='name'onChange={ this.handleChanges }/>
          <input type="email" placeholder='exemple@email.com' value={ email } name='email'onChange={ this.handleChanges }/>
          <input type="number" placeholder='digite seu número' value={ number } name='number'onChange={ this.handleChanges }/>
          <label htmlFor="checked"><input type="checkbox" checked={ agreed } name='agreed' id="checked" onChange={ this.handleChanges }/>O número informado é WhatsApp</label>
          <textarea name="message" cols="30" rows="10" placeholder='Deixe a sua mensagem'/>
          <button type="submit">Solicitar contato</button>
        </form>
      </div>
    );
  }
}
