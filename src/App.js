import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MathJaxContext } from 'better-react-mathjax';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Publications = lazy(() => import('./pages/Publications'));
const Gallery = lazy(() => import('./pages/Gallery'));

// project pages
const DuneProject = lazy(() => import('./pages/projects-pages/DuneProject'));
const TurbidityProject = lazy(() => import('./pages/projects-pages/TurbidityProject'));
const PatternProject = lazy(() => import('./pages/projects-pages/PatternProject'));
const GranularRheologyProject = lazy(() => import('./pages/projects-pages/GranularRheologyProject'));

const App = () => (
  <MathJaxContext>
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/projects/dune" element={<DuneProject />} />
          <Route path="/projects/turbidity" element={<TurbidityProject />} />
          <Route path="/projects/pattern" element={<PatternProject />} />
          <Route path="/projects/granular_rhology" element={<GranularRheologyProject />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </MathJaxContext>
);

export default App;
