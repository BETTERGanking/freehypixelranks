import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="container" style={{ textAlign: 'center' }}>
        <iframe 
          width="1280" 
          height="720" 
          src="https://www.youtube.com/embed/D_MUbs9dnDU" 
          title="Watch for a free rank" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default App;
