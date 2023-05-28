import { useContext, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import formImg from '../imagens/form.svg'
import { Context } from '../context/Context';

export default function Contato() {
  const stateInitial = {
    name: '',
    email: '',
    number: '',
    message: '',
    agreed: false,
  }

  const { theme } = useContext(Context);
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
  }, [data.agreed, data.email, data.message, data.name, data.number]);

  return (
    <section className="flex flex-col items-center justify-center gap-10 pt-20">
      <h1 className="text-5xl" >Solicitar contato</h1>
      <div className="w-full flex items-center justify-center">
        <img src={formImg} alt="svg" className='hidden lg:block w-1/3'/>
        <form onSubmit={ handleSubmit } className="flex flex-col gap-2 text-black">
          <input
            type="text"
            placeholder='digite seu nome'
            value={ data.name }
            name='name'
            onChange={ handleChanges }
            className={`h-10 rounded-xl pl-3 outline-0 border ${theme === 'ligth' ? 'border-slate-950' : 'border-white'}`}
          />
          <input
            type="email"
            placeholder='exemple@email.com'
            value={ data.email }
            name='email'
            onChange={ handleChanges }
            className={`h-10 rounded-xl pl-3 outline-0 border ${theme === 'ligth' ? 'border-slate-950' : 'border-white'}`}
          />
          <input
            type="number"
            placeholder='digite seu número'
            value={ data.number }
            name='number'
            onChange={ handleChanges }
            className={`h-10 rounded-xl pl-3 outline-0 border ${theme === 'ligth' ? 'border-slate-950' : 'border-white'}`}
          />
          <label
           htmlFor="checked"
           className={`flex gap-2 items-center ${theme === 'ligth' ? 'text-slate-950' : 'text-white'}`}
          >
            <input
              type="checkbox"
              checked={ data.agreed }
              name='agreed'
              id="checked"
              onChange={ handleChanges }
              className={`h-10 rounded-xl pl-3 outline-0 border ${theme === 'ligth' ? 'border-slate-950' : 'border-white'}`}
            />
            O número informado é WhatsApp
          </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder='Deixe a sua mensagem'
            value={ data.message }
            onChange={ handleChanges }
            className={`h-32 rounded-xl pl-3 pt-3 outline-0 border ${theme === 'ligth' ? 'border-slate-950' : 'border-white'}`}
          />
          <button
            type="submit"
            disabled={ disabled }
            className={
              `disabled:bg-slate-400  rounded-lg h-8 ${theme === 'ligth' ? 'bg-black text-white' : 'bg-white text-black'}
            `}
          >
            Solicitar contato
          </button>
        </form>
      </div>
    </section>
  );
}
