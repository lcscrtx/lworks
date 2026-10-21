import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/works', label: 'Works' },
  { to: '/stories', label: 'Stories' },
  { to: '/playground', label: 'Playground' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false); // menu do celular
  const { pathname } = useLocation();

  // Fecha o menu ao trocar de página e trava a rolagem enquanto ele está aberto
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`container header${open ? ' is-open' : ''}`}>
      <Link to="/" className="brand">Lucas Cartaxo <span>LWORKS®</span></Link>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Fechar' : 'Menu'}
      </button>

      <nav id="site-menu" className="site-menu">
        <ul className="nav">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                // Categorias e projetos ficam dentro de Works
                className={({ isActive }) => (isActive || (l.to === '/works' && pathname.startsWith('/projects')) ? 'active' : '')}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
