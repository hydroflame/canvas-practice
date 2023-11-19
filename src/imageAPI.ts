export const loadImage = (path: string): CanvasImageSource => {
  const img = document.createElement("img");
  img.src = path;
  return img;
};
