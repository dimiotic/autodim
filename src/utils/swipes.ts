export const swipeSlide = (
  dir: string,
  setMainImageId: any,
  mainImageId: number,
  images: string[] = []
) => {
  if (dir === 'Left') {
    setMainImageId(mainImageId - 1);
    if (mainImageId <= 0) {
      setMainImageId(images.length - 1);
    }
  } else if (dir === 'Right') {
    setMainImageId(mainImageId + 1);
    if (mainImageId >= images?.length - 1) {
      setMainImageId(0);
    }
  }
};
