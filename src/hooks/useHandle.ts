import React, { useEffect, useRef, useState } from "react"
import {initialData, typeData, htmlInput} from '@/types/types'
import { validateForm } from "@/service/validateForm"

export function useHandle () {
  const [datos, setDatos] = useState<typeData[]>([])

  const [formDatos, setFormDatos] = useState<typeData>(initialData)
  const [error, setError] = useState<any>(null)
  const isFirstInput = useRef(true)
  const [enviado, setEnviado] = useState<string>('')

  const { nombre, email, descripcion } = formDatos

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
      nombre: nombre,
      email: email,
      descripcion: descripcion
    }

    // Los datos se envian al setDatos para simular que se
    // guardaron en una base da datos
    setDatos([...datos, newDatos])
    console.log(datos)


    setFormDatos(initialData)
    setEnviado('Los datos se enviaron correctamente')
    setTimeout(() => {
      setEnviado('')
    }, 3000)
  }

  useEffect(() => {
    const error = validateForm(formDatos, isFirstInput)
    setError(error)
  }, [formDatos])

  return {handleChange, handleSubmit, formDatos, datos, error, enviado}
}