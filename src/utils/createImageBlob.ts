export const createImageBlob = (
  image: HTMLImageElement,
  width: number,
  height: number,
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(image, 0, 0, width, height);
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Failed to create image blob."));
        }
      });
    } else {
      reject(new Error("Failed to get canvas context."));
    }
  });
};
