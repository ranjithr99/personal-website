// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Add fade-in class to elements
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Sample project data
const projects = [
    {
        title: 'Project 1',
        description: 'Description of project 1',
        image: 'path/to/image1.jpg',
        link: '#'
    },
    // Add more projects here
];

// Populate projects grid
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card', 'fade-in');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
        `;
        projectGrid.appendChild(projectCard);
        observer.observe(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects); 