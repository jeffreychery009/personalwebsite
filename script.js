function toggleMenuIcon() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".menu-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function loadProfilePage() {
  location.href = "https://www.linkedin.com/in/jeffreychery/";
}

function loadGithubPage() {
  location.href = "https://github.com/jeffreychery009";
}
