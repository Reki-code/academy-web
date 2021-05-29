import React from 'react'
import  SlideGallery from 'react-image-gallery'

const slide = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Slides = ({ resource }) => {

  return (
    <div>
      <SlideGallery
        showThumbnails={false}
        
        items={slide}
      />
    </div>
  )
}

export default Slides
