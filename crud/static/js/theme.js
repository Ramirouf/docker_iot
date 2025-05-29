document.addEventListener("DOMContentLoaded", function () {
  const themeLinks = {
    light: "https://bootswatch.com/5/lumen/bootstrap.css",
    dark: "https://bootswatch.com/5/darkly/bootstrap.min.css",
  };
  const themeDropdownItems = document.querySelectorAll("[data-theme]");
  const themeLink = document.querySelector('link[rel=stylesheet][href*="bootswatch"]');
  // Cargar preferencia guardada o usar claro
  let theme = localStorage.getItem("theme") || "light";
  themeLink.href = themeLinks[theme];

  themeDropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const selected = this.getAttribute("data-theme");
      themeLink.href = themeLinks[selected];
      localStorage.setItem("theme", selected);
    });
  });
});
