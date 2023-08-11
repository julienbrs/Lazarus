const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

const hiddenElements_left = document.querySelectorAll('.hidden_left');
const hiddenElements_right = document.querySelectorAll('.hidden_right');

hiddenElements_left.forEach((element) => {observer.observe(element);});
hiddenElements_right.forEach((element) => {observer.observe(element);});
