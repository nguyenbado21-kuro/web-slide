import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  
  // Định nghĩa 6 tabs với các nhóm ảnh khác nhau từ các folder trong public
  const tabs = [
    {
      name: 'Hồ sơ năng lực',
      images: Array.from({ length: 25 }, (_, i) => `1/${i + 1}.png`)
    },
    {
      name: 'Đào tạo NPP',
      images: Array.from({ length: 21 }, (_, i) => `2/${i + 1}.jpg`)
    },
    {
      name: 'Đào tạo GBA',
      images: Array.from({ length: 15 }, (_, i) => `3/${i + 1}.jpg`)
    },
    {
      name: 'Đào tạo lựa chọn tiền lọc máy kiềm',
      images: Array.from({ length: 11 }, (_, i) => `4/${i + 1}.jpg`)
    },
    {
      name: 'Đào tạo 6 giải pháp kinh doanh',
      images: Array.from({ length: 23 }, (_, i) => `5/${i + 1}.jpg`)
    },
    {
      name: 'Đào tạo lọc tổng (Ecopark 3)',
      images: Array.from({ length: 19 }, (_, i) => `6/${i + 1}.jpg`)
    }
  ];

  const currentImages = tabs[activeTab].images;

  // Reset current image when switching tabs
  useEffect(() => {
    setCurrentImage(0);
  }, [activeTab]);

  // Track current image based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.image-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentImage(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchTab = (tabIndex) => {
    setActiveTab(tabIndex);
    // Scroll to top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <div className="tab-container">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeTab ? 'active' : ''}`}
              onClick={() => switchTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Image Sections */}
      <div className="website-container">
        {currentImages.map((image, index) => (
          <div key={`${activeTab}-${index}`} id={`image-${index}`} className="image-section">
            <img
              src={`/${image}`}
              alt={`${tabs[activeTab].name} ${index + 1}`}
              className="full-image"
              onError={(e) => {
                console.log(`Failed to load image: /${image}`);
                e.target.src = `data:image/svg+xml;base64,${btoa(`<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f5f5f5"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="#999" text-anchor="middle" dy=".3em">Image not found: ${image}</text></svg>`)}`;
              }}
              onLoad={() => {
                console.log(`Successfully loaded image: /${image}`);
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Dots Navigation */}
      <div className="dots-navigation">
        {currentImages.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImage ? 'active' : ''}`}
            title={`${tabs[activeTab].name} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;