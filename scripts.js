// JavaScript to toggle the navbar background color on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



const applyBtn = document.getElementById('applyBtn');
    const formModal = document.getElementById('formModal');
    const successMessage = document.getElementById('successMessage');

    applyBtn.addEventListener('click', () => {
      formModal.classList.add('active');
    });

    formModal.addEventListener('click', (e) => {
      if (e.target === formModal) {
        formModal.classList.remove('active');
      }
    });

    document.getElementById("contactForm").addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const form = event.target;
      const formData = new FormData(form);
      const successMessage = document.getElementById("successMessage");
  
      try {
          // Send form data to Formspree
          const response = await fetch("https://formspree.io/f/xblywojb", {
              method: "POST",
              body: formData,
              headers: {
                  Accept: "application/json",
              },
          });
  
          if (response.ok) {
              form.reset(); // Reset the form
              successMessage.classList.remove("hidden"); // Show success message
              setTimeout(() => {
                  successMessage.classList.add("hidden"); // Hide success message after 5 seconds
              }, 5000);
          } else {
              console.error("Submission failed");
          }
      } catch (error) {
          console.error("An unexpected error occurred:", error);
      }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (linkPage === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    }
  });
  

