import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import formImg from '../imagens/form.svg'

export default function FormContact() {
  const stateInitial = {
    name: '',
    email: '',
    number: '',
    message: '',
    agreed: false,
  }

  const [data, setData] = useState(stateInitial);
  const [disabled, setDisabled] = useState(true);

  const handleChanges = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setData((prev) => ({ ...prev, [target.name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newEmail = await emailjs.send('service_ctfu1jp', 'template_dkid50a', data, 'LZWdwlugSwp9YWOcv')
      if (newEmail.status !== 200) throw new Error(newEmail.text)

    } catch (error) {
      console.log(error.message);
    } finally {
      setData(stateInitial);
    }
  }

  useEffect(() => {
    if(data.name !== '' && data.number !== '' && data.email !== '' && data.message !== '' ) {
      setDisabled(false)
    } else setDisabled(true)
  }, [data.agreed, data.email, data.message, data.name, data.number])

  return (
    <div className="area-form">
      <div>
        <h1 className="title-form" >Solicitar contato</h1>
        <img src={formImg} alt="svg"/>
      </div>
      <form onSubmit={ handleSubmit }>
        <input type="text" placeholder='digite seu nome' value={ data.name } name='name'onChange={ handleChanges }/>
        <input type="email" placeholder='exemple@email.com' value={ data.email } name='email'onChange={ handleChanges }/>
        <input type="number" placeholder='digite seu número' value={ data.number } name='number'onChange={ handleChanges }/>
        <label htmlFor="checked"><input type="checkbox" checked={ data.agreed } name='agreed' id="checked" onChange={ handleChanges }/>O número informado é WhatsApp</label>
        <textarea name="message" cols="30" rows="10" placeholder='Deixe a sua mensagem' value={ data.message } onChange={ handleChanges }/>
        <button type="submit" disabled={ disabled } >Solicitar contato</button>
      </form>
    </div>
  );
}
