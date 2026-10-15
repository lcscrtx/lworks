import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ProjectsProvider } from '@/lib/projectsStore';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Category from '@/pages/Category';
import Project from '@/pages/Project';
import About from '@/pages/About';
import Works from '@/pages/Works';
import Contact from '@/pages/Contact';
import Playground from '@/pages/Playground';

// O painel só é baixado quando alguém abre /admin
const Admin = lazy(() => import('@/pages/admin/Admin'));

const SiteLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <ProjectsProvider>
        <Routes>
          <Route path="/admin/*" element={<Suspense fallback={null}><Admin /></Suspense>} />
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/projects/:id" element={<Category />} />
            <Route path="/projects/:id/:slug" element={<Project />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </ProjectsProvider>
    </BrowserRouter>
  );
}
