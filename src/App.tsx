import './App.css';

function App() {
  return (
    <div className="container">
      <h1>You're almost done.</h1>
      <p>Please watch the video to claim.</p>

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
