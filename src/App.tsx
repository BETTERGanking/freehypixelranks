import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Welcome to My Website</h1> {/* Other content remains visible */}
      
      <div className="video-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/D_MUbs9dnDU" 
          title="Watch for a free rank"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
