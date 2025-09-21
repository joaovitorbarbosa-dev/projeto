function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  // alterna classe light
  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/profile.png"); // imagem para modo claro
    localStorage.setItem("mode", "light");
  } else {
    img.setAttribute("src", "assets/profile.png"); // imagem para modo escuro
    localStorage.setItem("mode", "dark");
  }
}

// quando a página carrega, mantém o último modo salvo
window.onload = () => {
  const savedMode = localStorage.getItem("mode");
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  if (savedMode === "light") {
    html.classList.add("light");
    img.setAttribute("src", "assets/profile.png");
  } else {
    html.classList.remove("light");
    img.setAttribute("src", "assets/profile.png");
  }
};
