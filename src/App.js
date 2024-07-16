import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filmstrip from './Filmstrip';
import LargeImage from './LargeImage';
import './style/style.css';

function App() {
  const [templates, setTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/templates')
      .then(response => {
        setTemplates(response.data);
        setCurrentTemplate(response.data[0]);
      });
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentTemplate(templates[index]);
  };

  return (
    <div id="container">
      <header>Template Viewer</header>
      {currentTemplate && <LargeImage template={currentTemplate} />}
      <Filmstrip
        templates={templates}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        handleThumbnailClick={handleThumbnailClick}
      />
      <footer>&copy; 2024 Template Viewer</footer>
    </div>
  );
}

export default App;
