import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ProjectsProvider } from '@/lib/projectsStore';
import { PagesProvider } from '@/lib/pagesStore';
import Header from '@/components/Header';
import UpdateModal from '@/components/UpdateModal';
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
    <UpdateModal />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <ProjectsProvider>
        <PagesProvider>
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
        </PagesProvider>
      </ProjectsProvider>
      {/* Vercel Web Analytics: visitas e páginas vistas (só conta no site publicado na Vercel) */}
      <Analytics />
    </BrowserRouter>
  );
}
