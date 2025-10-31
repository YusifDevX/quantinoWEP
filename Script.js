window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
