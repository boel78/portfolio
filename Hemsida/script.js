


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
document.addEventListener("scroll", () => {
    const technologies = document.querySelectorAll(".technology");
  
    technologies.forEach((tech) => {
      const rect = tech.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
  
      if (isVisible) {
        tech.classList.add("visible");
      } else {
        tech.classList.remove("visible");
      }
    });
  });
  
  let currentTheme = "light";
  const themeSwitch = document.getElementById("themeSwitch");
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    currentTheme = currentTheme === "light" ? "dark" : "light";
    if(currentTheme === "light") {
      themeSwitch.src = "svgs/sun-svgrepo-com.svg";
    }
    else{
      themeSwitch.src = "svgs/moon.svg";
    }
  }

  themeSwitch.addEventListener("click", toggleTheme);

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(scrollY >= (sectionTop - sectionHeight / 2)) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach( li => {
      li.classList.remove('active');
      const liClass = li.className.replace('_nav', '');

      if(liClass === current) {
        li.classList.add('active');
      }
    });

  });
