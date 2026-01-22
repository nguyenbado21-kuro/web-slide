import React from 'react';
import './App.css';

function App() {
  // Danh sách ảnh (1.png đến 25.png)
  const images = Array.from({ length: 25 }, (_, i) => `${i + 1}.png`);

  return (
    <div className="website-container">
      {images.map((image, index) => (
        <div key={index} className="image-section">
          <img
            src={`/${image}`}
            alt={`Ảnh ${index + 1}`}
            className="full-image"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Bbmgge2luZGV4ICsgMX08L3RleHQ+PC9zdmc+';
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;