export interface typeData {
  id: number
  nombre: string
  email: string
  descripcion: string
}

 export const initialData: typeData = {
  id: Date.now(),
  nombre: '',
  email: '',
  descripcion: ''
}