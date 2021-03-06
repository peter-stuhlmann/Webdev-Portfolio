// Detect if WebP is supoorted

let detected = false;
let supported = false;

const detect = () => {
  const canvas = document.createElement('canvas');

  if (!canvas.toDataURL) {
    return false;
  }
  canvas.width = 1;
  canvas.height = 1;
  try {
    const url = canvas.toDataURL('image/webp');
    return url.substring(5, 15) === 'image/webp';
  } catch (e) {
    return false;
  }
};

export const WebP = () => {
  if (!detected) {
    supported = detect();
    detected = true;
  }
  return supported;
};
