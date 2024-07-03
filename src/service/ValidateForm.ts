import { typeData } from '@/types/types'

export const validateForm = (formDatos: typeData, isFirstInput: React.MutableRefObject<boolean>) => {
  const { nombre, email, descripcion } = formDatos

  if (isFirstInput.current) {
    isFirstInput.current = nombre === ''
    return null
  }

  if (nombre && email && descripcion === '') {
    return 'Los campos no pueden estar vacio'
  }

  if (nombre.length < 2 || nombre.length > 50) {
    return 'Por favor, ingresa un nombre entre 2 y 50 caracteres'
  }

  if (email.length > 100) {
    return 'Por favor, ingresa un correo electrónico válido.'
  }

  if (descripcion.length < 10 || descripcion.length > 500) {
    return 'Por favor, ingresa un mensaje válido (entre 10 y 500 caracteres).'
  }

  return null
}
