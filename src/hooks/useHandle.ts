import React, { useEffect, useRef, useState } from "react"
import {initialData, typeData} from '@/types/types'
import { useRouter } from "next/navigation"

export function useHandle () {
  const [datos, setDatos] = useState<typeData[]>([])
  const [formDatos, setFormDatos] = useState<typeData>(initialData)
  const [error, setError] = useState<any>(null)
  const isFirstInput = useRef(true)
  const [enviado, setEnviado] = useState<string>('')

  const router = useRouter()

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
    setEnviado('Los datos se enviaron correctamente')
    setTimeout(() => {
      setEnviado('')
    }, 3000)
    router.refresh()
  }
  
  const nombre = formDatos.nombre
  const email = formDatos.email
  const descripcion = formDatos.descripcion

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = nombre  === ''
      return
    }

    if (nombre && email && descripcion === '') {
      setError('Los campos no pueden estar vacio')
      return
    }


    if (nombre.length < 2 || nombre.length > 50) {
      setError('Por favor, ingresa un nombre entre 2 y 50 caracteres')
      return
    }

    if (email.length > 100 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError("P'or favor, ingresa un correo electrónico válido.")
      return
    }

    if (descripcion.length < 10 || descripcion.length > 500) {
      setError('Por favor, ingresa un mensaje válido (entre 10 y 500 caracteres).')
      return
    }

    setError(null)
  }, [formDatos])

  return {handleChange, handleSubmit, formDatos, datos, error, enviado}
}