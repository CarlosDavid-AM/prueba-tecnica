"use client"

import React, { useState } from "react"
import {initialData, typeData} from '@/types/types'

const ContactForm = () => {

  const [datos, setDatos] = useState<typeData[]>([])
  const [formDatos, setFormDatos] = useState<typeData>(initialData)

  type htmlInput = HTMLInputElement | HTMLTextAreaElement

  const handleChange = (e: React.ChangeEvent<htmlInput>) => {
    setFormDatos({
      ...formDatos,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const newDatos = {
      id: Date.now(),
      nombre: formDatos.nombre,
      email: formDatos.email,
      descripcion: formDatos.descripcion
    }

    setDatos([...datos, newDatos])
    console.log(datos)
    setFormDatos(initialData)
  }

  return (
    <div className='seccion'>
      <h2>
        Contacto
      </h2>

      <form onSubmit={handleSubmit}>
        <div className='aporte'>
          <label htmlFor="text">
            Nombre
          </label>
          <input type="text" id="text" name="nombre" value={formDatos.nombre} required
          onChange={handleChange} />
        </div>

        <div className='aporte'>
          <label htmlFor="email">
            Email
          </label>
          <input type='email' id="email" name="email" value={formDatos.email} required
          onChange={handleChange} />
        </div>

        <div className='aporte'>
          <label htmlFor="message">
            Mensaje
          </label>
          <textarea id="message" rows={10} name="descripcion" value={formDatos.descripcion} required 
          onChange={handleChange} ></textarea>
        </div>
        <button>
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ContactForm