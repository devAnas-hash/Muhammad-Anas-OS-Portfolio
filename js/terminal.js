/**
 * Muhammad Anas OS - Core Shell System Interactivity Terminal
 */
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('term-input');
    const outputArea = document.getElementById('terminal-output');

    const commandRegistry = {
        help: () => `Available System Commands:<br>
          <b>about</b>    - Profile documentation summary<br>
          <b>skills</b>   - Component technical matrix<br>
          <b>projects</b> - View compiled operational apps<br>
          <b>contact</b>  - Direct routing contact channels<br>
          <b>resume</b>   - Link to execution portfolio download<br>
          <b>clear</b>    - Wipe console trace history`,
        about: () => { openWindow('about-win'); return "Opening Profile Module (about-win)..."; },
        skills: () => { openWindow('skills-win'); return "Opening Competency Node Matrix (skills-win)..."; },
        projects: () => { openWindow('projects-win'); return "Opening Application Matrix (projects-win)..."; },
        contact: () => { openWindow('contact-win'); return "Opening Secure Routing Channels (contact-win)..."; },
        resume: () => { openWindow('resume-win'); return "Opening Document Viewer Subroutine (resume-win)..."; },
        clear: () => { outputArea.innerHTML = ''; return ''; }
    };

    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const rawInput = inputField.value.trim();
            const cleanCmd = rawInput.toLowerCase();
            
            if (rawInput === '') return;

            let terminalResponse = `command not found: ${rawInput}. Type 'help' for options.`;
            if (commandRegistry[cleanCmd]) {
                terminalResponse = commandRegistry[cleanCmd]();
            }

            if (cleanCmd !== 'clear') {
                outputArea.innerHTML += `<div><span class="prompt">anas_os:~$&nbsp;</span>${rawInput}</div>`;
                if (terminalResponse) {
                    outputArea.innerHTML += `<div>${terminalResponse}</div>`;
                }
            }
            
            inputField.value = '';
            document.querySelector('#terminal-win .window-body').scrollTop = outputArea.scrollHeight;
        }
    });
});