import React from 'react'
import { HeaderSection } from './styles'
import porto_seguro from '../../assets/images/porto_seguro.png'
import logo_Norte_a_Sul from '../../assets/images/logo-Norte-a-Sul.png'

const Header = () => {
  return (
    <HeaderSection>
      <img src={porto_seguro} alt="logo_porto_seguro" />
      <img src={logo_Norte_a_Sul} alt="logo_Norte_a_Sul" />

      <div>
        <a href="">Sobre</a>
        <a href="">Hospitais</a>
        <a href="">Benefícios</a>
        <a href="">Serviços Especiais</a>
        <a href="">Contato</a>
      </div>
    </HeaderSection>
  )
}

export default Header
