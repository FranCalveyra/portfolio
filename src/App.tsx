import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { AnimationProvider } from './contexts/AnimationContext';
import { PortfolioProvider, usePortfolio } from './contexts/PortfolioContext';

function AppContent() {
  const { data, loading, error } = usePortfolio();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="animate-pulse text-xl text-blue-400">Loading...</div>
      </div>
    );
  }
  if (error || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-6">
        <p className="text-xl text-red-400">{error ?? "No portfolio data available."}</p>
        <p className="text-slate-400 text-sm">Ensure Firestore has a document at portfolio/data (e.g. run the sync script).</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-fira-code">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <AnimationProvider>
      <PortfolioProvider>
        <AppContent />
      </PortfolioProvider>
    </AnimationProvider>
  );
}

export default App;