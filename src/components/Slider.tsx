import React, { useState, useEffect, useRef } from 'react';
import { swipeSlide } from 'utils/swipes';
import 'animate.css';
const delay = 2500;
const Slider = (props: any) => {
  const { images, options, underImages }: any = props;
  const [mainImageId, setMainImageId] = useState(0);
  const { btnsTop, height, width } = options;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const miniSwipe = () =>
    setTimeout(
      () =>
        setMainImageId((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

  useEffect(() => {
    resetTimeout();
    //@ts-ignore
    timeoutRef.current = miniSwipe();

    return () => {
      resetTimeout();
    };
  }, [mainImageId]);
  return (
    <div
      onMouseEnter={() => resetTimeout()}
      onMouseLeave={() => miniSwipe()}
      style={{
        overflowX: 'hidden',
        position: 'relative',
        margin: '0 auto',
        maxWidth: `${width}px`,
        marginTop: '90px',
        borderRadius: '9px',
      }}
    >
      <button
        style={{
          position: 'absolute',
          zIndex: '99',
          top: `${btnsTop}%`,
          border: 'none',
          fontSize: '90px',
          background: 'transparent',
          cursor: 'pointer',
          color: '#ff9f69',
        }}
        onClick={() => swipeSlide('Left', setMainImageId, mainImageId, images)}
      >
        &lt;
      </button>
      <div
        style={{
          whiteSpace: 'nowrap',
          transition: 'ease 1000ms',
          transform: `translate3d(${-mainImageId * 100}%, 0, 0)`,
        }}
      >
        {images.map((image: string) => {
          return (
            <img
              key={image}
              id="mainImage"
              style={{
                objectFit: 'cover',
                width: `${width}px`,
                height: `${height}px`,
              }}
              src={image}
              alt=""
            />
          );
        })}
      </div>
      <button
        id="mainSliderRight"
        style={{
          position: 'absolute',
          top: `${btnsTop}%`,
          right: '0',
          background: 'transparent',
          border: 'none',
          fontSize: '90px',
          zIndex: '99',
          cursor: 'pointer',
          color: '#ff9f69',
        }}
        onClick={() => swipeSlide('Right', setMainImageId, mainImageId, images)}
      >
        &gt;
      </button>
      {underImages && (
        <div>
          {images &&
            images.map((carImg: string) => {
              return (
                <img
                  onClick={() => setMainImageId(images.indexOf(carImg))}
                  key={carImg}
                  className={
                    mainImageId === images.indexOf(carImg) ? 'activeImage' : ''
                  }
                  style={{
                    width: '130px',
                    height: '100px',
                    objectFit: 'cover',
                    margin: '10px',
                    borderRadius: '15px',
                  }}
                  src={carImg}
                  alt="carImg"
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Slider;
