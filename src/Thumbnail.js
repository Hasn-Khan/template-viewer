import React from 'react';

function Thumbnail({ template, isSelected, onClick }) {
  return (
    <div className={`thumbnails ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <img src={`/images/thumbnails/${template.thumbnail}`} alt={template.thumbnail} />
    </div>
  );
}

export default Thumbnail;
