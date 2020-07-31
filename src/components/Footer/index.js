import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/images/Dunny.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Dunny logo" />
      </a>
      <p>
        &copy; Criado por
        {' '}
        <a href="https://www.linkedin.com/in/jpgusp/">Joao Pedro Giancoli</a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
