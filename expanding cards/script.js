
const slides=document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('click', ()=> {
        removeActiveClass();
        slide.classList.add('slide-active');
    })
})


const removeActiveClass= function () {
    slides.forEach((slide) => {
        slide.classList.remove('slide-active');
    });
};

 