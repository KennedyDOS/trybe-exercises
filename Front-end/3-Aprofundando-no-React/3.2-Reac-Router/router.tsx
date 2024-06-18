// src/components/nav-bar/index.tsx

import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Perfil</NavLink>
      <NavLink to="/cart">Carrinho</NavLink>
      <NavLink to="/orders">Pedidos</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default NavBar;
