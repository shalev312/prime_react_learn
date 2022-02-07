import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="p-4 flex justify-content-between">
      <NavLink to="/" className="text-xl">
        Table
      </NavLink>
      <NavLink to="todo" className="text-xl">
        Todos
      </NavLink>
    </div>
  );
};

export default Header;
