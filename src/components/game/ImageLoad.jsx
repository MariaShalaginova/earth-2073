import React, { useState, useEffect } from "react";

const ImageComponent = ({ src }) => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setLoading(false);
      };
    }, [src]);
  
    return loading ? <p>Loading...</p> : <img src={src} alt="scene image" />;
  };
  
  export default ImageComponent;