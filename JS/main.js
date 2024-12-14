document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#About");
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((progressBar) => {
            const value = progressBar.parentElement.getAttribute("aria-valuenow");
            progressBar.style.width = `${value}%`;
          });
          observer.disconnect(); // Stop observing once animation starts
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  observer.observe(aboutSection);
});


