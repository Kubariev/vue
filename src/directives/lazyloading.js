export default {
  inserted: (el) => {
    function funcObserver() {
      const objData = {
          root: null,
            threshold: "0",
        },
        observer = new IntersectionObserver(checkImages, objData);

      observer.observe(el);
    }

    window["IntersectionObserver"] ? funcObserver() : preloadImages();

    function preloadImages() {
      let imageElement = el.getElementsByTagName('IMG')[0];
      imageElement.classList.add("faded");
    }

    function checkImages(items, observer) {
      items.forEach((item) => {
        if (item.isIntersecting) {
          preloadImages();
          observer.unobserve(el);
        }
      });
    }
  },
};