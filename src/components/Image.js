import { useRef, useState, useEffect } from "react";
import * as React from "react";
import PLACE_HOLDER from "assets/images/no-image.jpg";

export const LazyImage = ({ src, width, height }) => {
  const imgRef = useRef(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    function loadImage() {
      setIsLoad(true);
    }

    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    return () => {
      imgEl && imgEl.removeEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        threshold: 0.1
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  return (
    <img
    style={{objectFit:"cover"}}
      ref={imgRef}
      src={isLoad ? src : PLACE_HOLDER}
      width={width}
      height={height}
      alt=""
    />
  );
}

let observer = null;
const LOAD_IMG_EVENT_TYPE = "loadImage";

function onIntersection(entries, io) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
}


export default LazyImage;