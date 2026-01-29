import React from "react";

import img1 from "../../../../assets/111111111.png";
import img2 from "../../../../assets/111111111.png";
import img3 from "../../../../assets/shopnogor.png";
import img4 from "../../../../assets/mariiiii.png";

const ImageStrip = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
  ];

  return (
   <div className="w-full overflow-hidden py-6 
                bg-gray-50 dark:bg-gray-900 
                transition-colors duration-300">
  <div className="flex gap-4 animate-scroll whitespace-nowrap min-w-max">
    {images.concat(images).map((image, index) => (
      <img
        key={index}
        src={image}
        alt="product"
        className="
          h-32 w-auto object-contain
          bg-white dark:bg-gray-800
          px-2 py-1
          rounded-lg
          shadow-md dark:shadow-gray-700
          transition
        "
      />
    ))}
  </div>
</div>

  );
};

export default ImageStrip;
