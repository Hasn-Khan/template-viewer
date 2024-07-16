import React from 'react';
import Thumbnail from './Thumbnail';

function Filmstrip({ templates, currentIndex, setCurrentIndex, handleThumbnailClick }) {
  const thumbnailsToShow = templates.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < templates.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  return (
    <div className="thumbnails group">
      <a className={`previous ${currentIndex === 0 ? 'disabled' : ''}`} onClick={handlePrevious}>Previous</a>
      {thumbnailsToShow.map((template, index) => (
        <Thumbnail
          key={template.id}
          template={template}
          isSelected={currentIndex + index === currentIndex}
          onClick={() => handleThumbnailClick(currentIndex + index)}
        />
      ))}
      <a className={`next ${currentIndex + 4 >= templates.length ? 'disabled' : ''}`} onClick={handleNext}>Next</a>
    </div>
  );
}

export default Filmstrip;
