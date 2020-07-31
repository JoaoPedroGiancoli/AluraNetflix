import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Dunny.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Dunny logo" />
      </Link>

      <Button className="ButtonLink" as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;