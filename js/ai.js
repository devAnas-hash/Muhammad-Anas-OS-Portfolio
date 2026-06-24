/**
 * Muhammad Anas OS - Context-Isolated Portfolio AI Agent Subsystem
 */
const portfolioAIDatabase = [
    { 
        keys: ['who', 'anas', 'muhammad', 'about'], 
        response: "I'm Muhammad Anas, a software engineering student from Karachi, Pakistan. I specialize in frontend development, UI/UX design, and clean code architecture. I'm currently pursuing a BS in Computer Science and have completed internships in Software Development, Finance, and Human Resources." 
    },
    { 
        keys: ['skill', 'languages', 'tech', 'stack', 'proficient'], 
        response: "My technical stack includes HTML5, CSS3, JavaScript (ES6+), Python, and fundamental software development concepts. I'm also proficient in MS Office Suite, Git version control, and various development tools. I focus on responsive design and user-centric development." 
    },
    { 
        keys: ['project', 'work', 'apps', 'portfolio', 'build'], 
        response: "I've created this OS-themed portfolio showcasing my skills with an interactive, responsive design. I'm currently developing new projects in React, Python, and full-stack development. Check the Projects section to see what I'm working on!" 
    },
    { 
        keys: ['experience', 'intern', 'work', 'toyota'], 
        response: "I've completed internships at Toyota Creek Motors in three departments: Software Development, Finance, and Human Resources. These roles gave me practical experience in coding, financial analysis, recruitment, and professional operations." 
    },
    { 
        keys: ['contact', 'email', 'hire', 'reach', 'message'], 
        response: "You can reach me at raoanas606@gmail.com or call +92 321 3921501. I'm also on GitHub and LinkedIn - check the Contact section for links. Feel free to send me a message through the contact form!" 
    },
    { 
        keys: ['education', 'study', 'degree', 'university', 'college'], 
        response: "I'm pursuing a BS in Computer Science at Salim Habib University (starting Sep 2025). I completed my DAE in Software Engineering from Aptech Metro, and CIT from Sham Shad Grammar College. Continuous learning is my passion!" 
    },
    { 
        keys: ['download', 'resume', 'cv', 'pdf'], 
        response: "You can view and download my full resume from the Resume_Viewer window. It includes my complete education, experience, technical skills, and soft skills overview." 
    },
    { 
        keys: ['help', 'command', 'terminal', 'what'], 
        response: "You can explore my portfolio using the desktop icons or the System Terminal. Try typing commands like 'help', 'about', 'skills', 'projects', 'contact', or 'resume' in the terminal for quick access!" 
    }
];

function toggleAIWidget() {
    const aiBody = document.getElementById('ai-body');
    const toggleIcon = document.getElementById('ai-toggle-icon');
    aiBody.classList.toggle('hidden');
    toggleIcon.classList.toggle('fa-chevron-up');
    toggleIcon.classList.toggle('fa-chevron-down');
}

function sendAIOps() {
    const inputElement = document.getElementById('ai-input');
    const chatHistory = document.getElementById('ai-chat-history');
    const rawQuery = inputElement.value.trim();

    if (!rawQuery) return;

    // Output User Input Content to Window Matrix
    chatHistory.innerHTML += `<div class="ai-msg user">${rawQuery}</div>`;
    inputElement.value = '';

    // Match conditions against custom operational structure
    let lowerQuery = rawQuery.toLowerCase();
    let computedReply = "Query parameters yielded ambiguous responses. Request telemetry data regarding core skills, contact routing vector, or projects infrastructure.";

    for (const record of portfolioAIDatabase) {
        if (record.keys.some(key => lowerQuery.includes(key))) {
            computedReply = record.response;
            break;
        }
    }

    // Deliver matching structural payload output simulating response lag
    setTimeout(() => {
        chatHistory.innerHTML += `<div class="ai-msg bot">${computedReply}</div>`;
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 350);
}