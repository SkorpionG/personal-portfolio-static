import { projects } from "./data/projects.js";
import { techStacks } from "./data/tech-stacks.js";
import { tools } from "./data/tools.js";

function renderNavbar() {
  const navItems = [
    { text: "Home", href: "index.html" },
    { text: "About", href: "about.html" },
    { text: "Projects", href: "projects.html" },
    { text: "Contact", href: "contact.html" },
  ];

  const navbarPlaceholder = document.getElementById("navbar-container");
  if (!navbarPlaceholder) {
    console.error("Navbar placeholder not found!");
    return;
  }

  const navElement = document.createElement("nav");
  navElement.id = "navbar";

  const ulElement = document.createElement("ul");

  const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Get current page filename

  navItems.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.classList.add("nav-item");

    const aElement = document.createElement("a");
    aElement.href = item.href;
    aElement.textContent = item.text;

    // Check if the item's href matches the current page
    if (item.href === currentPage) {
      liElement.classList.add("active");
    }

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  navElement.appendChild(ulElement);
  navbarPlaceholder.appendChild(navElement); // Inject the navbar
}

function renderProject(project) {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project-item");

  const title = document.createElement("h3");
  title.textContent = project.title;
  projectElement.appendChild(title);

  const description = document.createElement("p");
  description.textContent = project.description;
  projectElement.appendChild(description);

  const links = document.createElement("div");
  links.classList.add("project-links");

  if (project.demoLink) {
    const demoLink = document.createElement("a");
    demoLink.href = project.demoLink;
    demoLink.textContent = "Live Demo";
    demoLink.target = "_blank"; // Open in new tab
    links.appendChild(demoLink);
  }

  if (project.githubLink) {
    const githubLink = document.createElement("a");
    githubLink.href = project.githubLink;
    githubLink.textContent = "GitHub Repo";
    githubLink.target = "_blank"; // Open in new tab
    links.appendChild(githubLink);
  }

  projectElement.appendChild(links);

  return projectElement;
}

function renderToTopButton() {
  const toTopDiv = document.createElement("div");
  toTopDiv.id = "to-top";

  const link = document.createElement("a");
  link.href = "#top"; // Use "#top" or the ID of the main container if needed

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "16");
  svg.setAttribute("height", "16");
  svg.setAttribute("fill", "currentColor");
  svg.classList.add("bi", "bi-arrow-up");
  svg.setAttribute("viewBox", "0 0 16 16");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute(
    "d",
    "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
  );

  svg.appendChild(path);

  const span = document.createElement("span");
  span.id = "to-top-text";
  span.textContent = "Back to top";

  link.appendChild(svg);
  link.appendChild(span);
  toTopDiv.appendChild(link);

  document.body.appendChild(toTopDiv); // Append to the body
}

function renderTechStacks() {
  const skillsTd = document.getElementById("skills-td");
  if (!skillsTd) {
    // Don't run if the target element isn't on the current page
    return;
  }

  skillsTd.innerHTML = ""; // Clear existing content

  if (techStacks && techStacks.length > 0) {
    techStacks.forEach((stack) => {
      const img = document.createElement("img");
      img.src = stack.icon;
      img.alt = stack.name;
      img.title = stack.name; // Add title attribute
      // Optionally add classes or styles here if needed
      skillsTd.appendChild(img);
    });
  } else {
    skillsTd.textContent = "No skills listed."; // Fallback text
  }
}

// Add the new renderTools function
function renderTools() {
  const toolsTd = document.getElementById("tools-td");
  if (!toolsTd) {
    // Don't run if the target element isn't on the current page
    return;
  }

  toolsTd.innerHTML = ""; // Clear existing content

  if (tools && tools.length > 0) {
    tools.forEach((tool) => {
      const img = document.createElement("img");
      img.src = tool.icon;
      img.alt = tool.name;
      img.title = tool.name; // Add title attribute
      // Optionally add classes or styles here if needed
      toolsTd.appendChild(img);
    });
  } else {
    toolsTd.textContent = "No tools listed."; // Fallback text
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar(); // Call the navbar rendering function
  renderToTopButton(); // Call the "to top" button rendering function

  // Logic for rendering projects (only relevant on projects.html, but safe elsewhere)
  const projectsListContainer = document.getElementById("projects-list");
  if (projectsListContainer) {
    // Check if the container exists on the current page
    if (projects && projects.length > 0) {
      projects.forEach((project) => {
        const projectNode = renderProject(project);
        projectsListContainer.appendChild(projectNode);
      });
    } else {
      projectsListContainer.textContent = "No projects to display yet.";
    }
  } else if (window.location.pathname.endsWith("projects.html")) {
    // Only log error if we are on the projects page and the container is missing
    console.error("Project list container not found on projects page!");
  }

  // Logic for rendering tech stacks (only relevant on index.html)
  renderTechStacks();
  // Logic for rendering tools (only relevant on index.html)
  renderTools();
});
