/**
 * Muhammad Anas OS - Theme Management Module
 */
function switchSystemTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('anas_os_theme', themeName);
    
    // Inject notification parameters straight into terminal framework if active
    const termOut = document.getElementById('terminal-output');
    if (termOut) {
        termOut.innerHTML += `<div class="system-msg">[System] Profile changed: Loaded environment theme -> ${themeName}</div>`;
    }
}

// Restore saved preferences on execution initialize
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('anas_os_theme') || 'dark';
    document.getElementById('theme-switcher').value = savedTheme;
    switchSystemTheme(savedTheme);
});