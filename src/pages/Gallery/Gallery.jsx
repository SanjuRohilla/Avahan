import React from 'react';
import './Gallery.css';

const images = [
  { src: '/src/assets/images/nukkad.jpg', title: 'Nukkad Natak' },
  { src: '/src/assets/images/nukkad.jpg', title: 'Andha Mor' },
  { src: '/src/assets/images/nukkad.jpg', title: 'Treasure Hunt' },
  { src: '/src/assets/images/nukkad.jpg', title: 'Faculty Event' },
  { src: '/src/assets/images/nukkad.jpg', title: 'Kavita Vachan' },
  { src: '/src/assets/images/nukkad.jpg', title: 'Awahan' },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">GALLERY</h1>
      <h2 className="sub-title">Memories of Aawahan'23</h2>
      <div className='layer'>

        <div>
            <div className="gallery-grid">
                {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img src={image.src} alt={image.title} className="gallery-image"/>
                    <div className="image-title">{image.title}</div>
                </div>
                ))}
            </div>
        </div>

      </div>


      <h3 className="second-title">Memories of Aawahan'22</h3>
      <div className='layer'>

        <div>
            <div className="gallery-grid">
                {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img src={image.src} alt={image.title} className="gallery-image"/>
                    <div className="image-title">{image.title}</div>
                </div>
                ))}
            </div>
        </div>

      </div>

    </div>
  );
};

export default Gallery;
