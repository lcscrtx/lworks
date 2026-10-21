import { NavLink } from 'react-router-dom';
import { useCategories } from '@/lib/projectsStore';

// Abas entre as categorias (Works = todas), nas páginas de Works, de cada categoria e de Stories
export default function CategoryNav() {
  const categories = useCategories();
  return (
    <nav className="category-nav reveal" aria-label="Categorias" style={{ '--delay': '.18s' }}>
      <ul>
        <li><NavLink to="/works" end>Todos</NavLink></li>
        {categories.map((c) => (
          <li key={c.id}><NavLink to={`/projects/${c.id}`}>{c.label}</NavLink></li>
        ))}
        <li><NavLink to="/stories">Stories</NavLink></li>
      </ul>
    </nav>
  );
}
