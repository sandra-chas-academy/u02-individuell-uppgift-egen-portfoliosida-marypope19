import { fetchProjects } from "./services/fetchProjects.js";

const projectsEl = document.getElementById("cards-div");

async function printProjects() {
  let projectsArray = await fetchProjects();

  projectsArray.forEach(function (item) {
    const projectsHtml = `
    <article class="card card1">
      <img src="${item.img}" class="img-card" alt="Project 1">
      <h3 class="h3-projects">${item.title}</h3>
      <p class="p-projects">${item.description}</p>
      <p><span class="bold-text">Tech stack:</span>${item.tech_stack}</p>
        <div class="card-links">
          <div>
            <p class="link-icon">&#128279;</p>
            <a href="${item.live_preview_link}" class="link-underline">Live preview</a>
          </div>
        <div>
          <img src="./assets/img/icons/github.png" class="card-github-icon" alt="Github">
          <a href="${item.code_link}" class="link-underline">View Code</a>
        </div>
      </div>
   </article>
  `
  projectsEl.innerHTML += projectsHtml;
  });
}

printProjects();
