// image proxy

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (err) => {
      reject(err);
    };
    img.src = url;
  });
};

export function loadImageProxy(url, target) {
  return new Promise((resolve, reject) => {
    const loading =
      'https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831';
    loadImage(loading).then(() => {
      target.style.backgroundImage = `url(${url})`;
    });
    const img = loadImage(url)
      .then(() => {
        setTimeout(() => {
          resolve(img);
        }, 2000);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
