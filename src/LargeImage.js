import React from 'react';

function LargeImage({ template }) {
  console.log('template.image', template.image)
  return (
    <div className="large-image">
      <img src={`/images/large/${template.image}`} alt={template.description} />
      <div className="metadata">
        <p>ID: {template.id}</p>
        <p>Cost: {template.cost}</p>
        <p>Description: {template.description}</p>
        <p>Thumbnail File: {template.thumbnail}</p>
        <p>Image File: {template.image}</p>
      </div>
    </div>
  );
}

export default LargeImage;
