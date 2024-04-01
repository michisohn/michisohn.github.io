// Add active class to the current menu item
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});

