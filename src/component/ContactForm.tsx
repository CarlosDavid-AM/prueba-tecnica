"use client"

import { useHandle } from "@/hooks/useHandle"

const ContactForm = () => {

   const {handleChange, handleSubmit, formDatos, error, enviado} = useHandle()

  return (
    <div className='seccion'>
      <h2> Contacto </h2>

      <form onSubmit={handleSubmit}>
        <div className='aporte'>
          <label htmlFor="text"> Nombre </label>
          <input type="text" id="text" name="nombre" value={formDatos.nombre} required
          onChange={handleChange} />
        </div>

        <div className='aporte'>
          <label htmlFor="email"> Email </label>
          <input type='email' id="email" name="email" value={formDatos.email} required
          onChange={handleChange} />
        </div>

        <div className='aporte'>
          <label htmlFor="message"> Mensaje </label>
          <textarea id="message" rows={10} name="descripcion" value={formDatos.descripcion} required 
          onChange={handleChange} ></textarea>
        </div>

        { 
          error && 
          <p className='error' style={{color: 'red'}}>
            {error}
          </p> 
        }

        {
          enviado && 
          <p> {enviado} </p>
        }

        <button> Enviar </button>
      </form>
    </div>
  )
}

export default ContactForm