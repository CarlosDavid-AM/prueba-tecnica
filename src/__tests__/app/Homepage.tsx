import About from '@/component/About'
import ContactForm from '@/component/ContactForm'
import Interests from '@/component/Interests'
import MainHeader from '@/component/MainHeader'
import {render, screen} from '@testing-library/react'

describe ("Home Page", () => {
  it ('Renderizado del Header', () => {
    render(<MainHeader />)
  
    expect(screen.getByText('Carlos David')).toBeInTheDocument
  })
  
  it ('Renderizado del About', () => {
    render(<About />)
  
    expect(screen.getByText('Sobre Mi')).toBeInTheDocument
  })
  
  it ('Renderizado del los Intereses', () => {
    render(<Interests />)
  
    expect(screen.getByText('Intereses')).toBeInTheDocument
  })
  
  it ('Renderizado del Formulario de contacto', () => {
    render(<ContactForm />)
  
    expect(screen.getByText('Contacto')).toBeInTheDocument
  })  
})