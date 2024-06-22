// Ambil semua link pada navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Tambahkan event listener pada setiap link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah perilaku default link

    // Ambil target section berdasarkan href link yang diklik
    const targetSection = document.querySelector(event.target.getAttribute('href'));

    // Scroll ke target section dengan efek smooth
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});