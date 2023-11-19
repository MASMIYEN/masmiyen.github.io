// index.js

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Fetch the README.md file
fetch('README.md')
    .then(response => response.text())
    .then(markdown => {
        // Convert Markdown to HTML using Markdown-it
        if (typeof window.markdownit === 'function') {
            const md = window.markdownit();
            const html = md.render(markdown);
            document.getElementById('readme-container').innerHTML = html;
        } else {
            console.error('Markdown-it library is not loaded.');
        }
    })
    .catch(error => {
        console.error('Error fetching README.md:', error);
    });
