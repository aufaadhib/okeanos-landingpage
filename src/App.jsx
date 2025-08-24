import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Scrollbars } from "react-custom-scrollbars-4";
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import { VideoSection } from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import DevisionSection from './components/DevisionSection';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import AllPortfolioPage from './components/AllPortfolioPage';
import { PortfolioDetailPage } from './components/PortfolioDetailPage';
import NewsSection from './components/NewsSection';
import NewsDetailPage from './components/NewsDetailPage';
import AllNewsPage from './components/AllNewsPage';
import Footer from './components/Footer';



function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'news-detail' | 'all-news' | 'portfolio-detail' | 'all-portfolio'
  const [selectedNewsItem, setSelectedNewsItem] = useState(null);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);

  const handleNewsClick = (newsItem) => {
    setSelectedNewsItem(newsItem);
    setCurrentView('news-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePortfolioClick = (portfolioItem) => {
    setSelectedPortfolioItem(portfolioItem);
    setCurrentView('portfolio-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllNews = () => {
    setCurrentView('all-news');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllPortfolio = () => {
    setCurrentView('all-portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    const previousView = currentView;
    setCurrentView('home');
    setSelectedNewsItem(null);
    setSelectedPortfolioItem(null);

    setTimeout(() => {
      if (previousView === 'news-detail' || previousView === 'all-news') {
        const newsSection = document.getElementById('news');
        if (newsSection) newsSection.scrollIntoView({ behavior: 'smooth' });
      } else if (previousView === 'portfolio-detail' || previousView === 'all-portfolio') {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
<div className="min-h-screen relative">
      {/* <BackgroundAnimation> */}
        {currentView === 'home' ? (
          <>
            <Navbar />
            <main className="relative">
              <Hero />
              <AboutSection />
              <ServicesSection />
              <DevisionSection />
              <PortfolioSection 
                onPortfolioClick={handlePortfolioClick}
                onViewAllPortfolio={handleViewAllPortfolio}
              />
              <NewsSection 
                onNewsClick={handleNewsClick}
                onViewAllNews={handleViewAllNews}
              />
              <VideoSection />
            </main>
            <Footer />

          </>
        ) : currentView === 'news-detail' && selectedNewsItem ? (
          <NewsDetailPage 
            newsItem={selectedNewsItem} 
            onBack={handleBackToHome}
          />
        ) : currentView === 'all-news' ? (
          <AllNewsPage 
            onNewsClick={handleNewsClick}
            onBack={handleBackToHome}
          />  
        ) : currentView === 'portfolio-detail' && selectedPortfolioItem ? (
          <PortfolioDetailPage 
            portfolioItem={selectedPortfolioItem} 
            onBack={handleBackToHome}
          />
        ) : currentView === 'all-portfolio' ? (
          <AllPortfolioPage 
            onPortfolioClick={handlePortfolioClick}
            onBack={handleBackToHome}
          />
        ) : null}
        {/* <AdminPanel /> */}
      {/* </BackgroundAnimation> */}
    </div>
  )
}

export default App
