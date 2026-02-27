(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const statusClass = (status) => {
    switch ((status || '').toLowerCase()) {
      case 'planning':
        return 'status-planning';
      case 'in-progress':
      case 'in progress':
        return 'status-in-progress';
      case 'blocked':
        return 'status-blocked';
      case 'done':
        return 'status-done';
      default:
        return 'status-unknown';
    }
  };

  const list = document.getElementById('projects-list');
  if (!list) return;

  fetch('/data/projects.json')
    .then((res) => res.json())
    .then((projects) => {
      list.innerHTML = '';
      projects.forEach((project) => {
        const card = document.createElement('article');
        card.className = 'project-card';

        card.innerHTML = `
          <header>
            <h3><a href="${project.links.overview}">${project.name}</a></h3>
            <span class="status ${statusClass(project.status)}">${project.status}</span>
          </header>
          <p>${project.summary}</p>
          <p class="muted">Updated: ${project.updated}</p>
          <p class="project-links">
            <a href="${project.links.plan}">Plan</a>
            <a href="${project.links.changelog}">Changelog</a>
            <a href="${project.links.repo}" target="_blank" rel="noreferrer">Repo</a>
            <a href="${project.links.dev}" target="_blank" rel="noreferrer">Dev Site</a>
            <a href="${project.links.prod}" target="_blank" rel="noreferrer">Prod Site</a>
          </p>
        `;

        list.appendChild(card);
      });
    })
    .catch(() => {
      list.innerHTML = '<p class="muted">Project feed unavailable.</p>';
    });
})();
