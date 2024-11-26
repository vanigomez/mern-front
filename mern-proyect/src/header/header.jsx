import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  const links = [  // Use a more descriptive variable name
    { to: "/", label: "Home" },
    { to: "/login", label: "Iniciar Sesión" },
    { to: "/register", label: "Registrarse" },
  ];

  return (
    <nav className="topnav">
      {links.map((item) => (  // Use a different variable name for clarity
        <NavLink
          key={item.to}
          to={item.to}
         >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Header;