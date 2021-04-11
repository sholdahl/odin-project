const slideControl = {
  currentSlide: 0,
  slides: document.querySelectorAll(".slide-wrapper"),
  nextSlideBtn: document.querySelector(".next-slide"),
  lastSlideBtn: document.querySelector(".last-slide"),
  slideBtns: document.querySelectorAll(".img-selector"),
  changeSlides: (oldSlideNumber) => {
    slideControl.slides[oldSlideNumber].classList.toggle("active");
    slideControl.slides[slideControl.currentSlide].classList.toggle("active");
    slideControl.slideBtns[oldSlideNumber+5].classList.toggle("inactive-slide-selector");
    slideControl.slideBtns[slideControl.currentSlide+5].classList.toggle("inactive-slide-selector");
  },
  getSlideBtnNumber: (e) => {
    let slideNum = parseInt(e.path[0].dataset.slide)-1;
    console.log(`Slide ${slideNum} was selected`);
    return slideNum;
  },
  nextSlide: () => {
      let oldSlideNumber = slideControl.currentSlide;
      if (slideControl.currentSlide == slideControl.slides.length-1) {
        slideControl.currentSlide = 0;
    } else {
        slideControl.currentSlide++;
    };
      slideControl.changeSlides(oldSlideNumber);
  },
  lastSlide: () => {
        let oldSlideNumber = slideControl.currentSlide;
        if (slideControl.currentSlide == 0) {
            slideControl.currentSlide = slideControl.slides.length-1;
        } else {
            slideControl.currentSlide--;
        };
        slideControl.changeSlides(oldSlideNumber);
  },
  selectSlide: e => {
    let oldSlideNumber = slideControl.currentSlide;  
    slideControl.currentSlide = slideControl.getSlideBtnNumber(e);
    slideControl.changeSlides(oldSlideNumber);
  }
};
let we = "asd";

const listeners = {
  init: () => {
      listeners.nextSlide();
      listeners.lastSlide();
      listeners.slideBtns();
  },
  nextSlide: () => {
    slideControl.nextSlideBtn.addEventListener("click", slideControl.nextSlide);
  },
  lastSlide: () => {
    slideControl.lastSlideBtn.addEventListener("click", slideControl.lastSlide);
  },
  slideBtns: () => {
      slideControl.slideBtns.forEach(btn => {
          btn.addEventListener("click", slideControl.selectSlide)
      })
  }
};

listeners.init();

