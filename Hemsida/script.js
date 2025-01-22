document.addEventListener("scroll", () => {
    const technologies = document.querySelectorAll(".technology");
  
    technologies.forEach((tech) => {
      const rect = tech.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
  
      if (isVisible) {
        tech.classList.add("visible"); // Lägg till klassen om den är synlig
      } else {
        tech.classList.remove("visible"); // Ta bort klassen om den inte är synlig
      }
    });
  });
  