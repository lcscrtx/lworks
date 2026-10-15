import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container header">
      <Link to="/" className="brand">Lucas Cartaxo <span>LWORKS®</span></Link>
      <nav>
        <ul className="nav">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/works">Works</NavLink></li>
          <li><NavLink to="/playground">Playground</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
