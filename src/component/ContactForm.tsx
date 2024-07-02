const ContactForm = () => {
  return (
    <div className='seccion'>
      <h2>
        Contacto
      </h2>

      <form>
        <div className='aporte'>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div className='aporte'>
          <label htmlFor="">Email</label>
          <input type='email' />
        </div>
        <div className='aporte'>
          <label htmlFor="">Mensaje</label>
          <textarea id="" rows={10}></textarea>
        </div>
      </form>
    </div>
  )
}

export default ContactForm