import { useState } from 'react';
import '../styles/FormContact.css'
import formImg from '../imagens/form.svg'

export default function FormContact() {
  const stateInitial = {
    name: '',
    email: '',
    number: '',
    message: '',
    agreed: false,
  }
  const [data, setData] = useState(stateInitial)

  const handleChanges = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setData((prev) => ({ ...prev, [target.name]: value }))
  }

  return (
    <div className="area-form">
      <div>
        <h1 className="title-form" >Solicitar contato</h1>
        <img src={formImg} alt="svg"/>
      </div>
      <form action="https://formsubmit.co/hectorsouzass@gmail.com" method='POST'>
        <input type="text" placeholder='digite seu nome' value={ data.name } name='name'onChange={ handleChanges }/>
        <input type="email" placeholder='exemple@email.com' value={ data.email } name='email'onChange={ handleChanges }/>
        <input type="number" placeholder='digite seu número' value={ data.number } name='number'onChange={ handleChanges }/>
        <label htmlFor="checked"><input type="checkbox" checked={ data.agreed } name='agreed' id="checked" onChange={ handleChanges }/>O número informado é WhatsApp</label>
        <textarea name="message" cols="30" rows="10" placeholder='Deixe a sua mensagem' onChange={ handleChanges }/>
        <button type="submit">Solicitar contato</button>
      </form>
    </div>
  );
}
