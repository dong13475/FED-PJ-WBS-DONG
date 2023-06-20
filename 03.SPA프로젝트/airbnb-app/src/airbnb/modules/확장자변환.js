import React, { useEffect } from 'react';
import $ from 'jquery';

const RandomImageComponent = ({ containerId, imageUrl }) => {
  const imageExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif'
  ];

  useEffect(() => {
    const displayImageByExtension = () => {
      for (let i = 0; i < imageExtensions.length; i++) {
        const tempUrl = imageUrl + imageExtensions[i];

        // Check if the image file exists using AJAX request
        $.ajax({
          url: tempUrl,
          type: 'HEAD',
          async: false,
          success: function () {
            $('#random-image').attr('src', tempUrl);
            $('#random-image').css('display', 'block');
            return false; // Break the loop if image is found
          },
          error: function () {
            // Image file doesn't exist, continue the loop
          }
        });
      }
    };

    displayImageByExtension();
  }, [imageUrl]);

  return (
    <div id={containerId}>
      <img id="random-image" src="" alt="Random Image" style={{ display: 'none' }} />
    </div>
  );
};

export default RandomImageComponent;