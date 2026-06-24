/**
 * Muhammad Anas OS - Main Desktop Core Engine Orchestrator
 */

// 1. Interactive Loader Simulation Execution Sequence
document.addEventListener('DOMContentLoaded', () => {
    const logContainer = document.getElementById('boot-logs');
    const bootSequences = [
        "Verifying structural memory architectures...",
        "Loading system core graphics parameters...",
        "Parsing local skills.dat module index mapping...",
        "Mounting portfolio files to sandbox container...",
        "Establishing encrypted contact routing infrastructure...",
        "Muhammad Anas OS Boot routine status: SUCCESSFUL."
    ];

    let sequentialStep = 0;
    const loggingInterval = setInterval(() => {
        if (sequentialStep < bootSequences.length) {
            logContainer.innerHTML += `<div>[OK] ${bootSequences[sequentialStep]}</div>`;
            logContainer.scrollTop = logContainer.scrollHeight;
            sequentialStep++;
        } else {
            clearInterval(loggingInterval);
            setTimeout(() => {
                document.getElementById('boot-screen').style.display = 'none';
                document.getElementById('desktop').classList.remove('hidden');
                // Auto bootstrap execution launch of core interactive console terminal
                openWindow('terminal-win');
            }, 500);
        }
    }, 350);

    // Initialise System Workspace Engine Timers
    setInterval(updateLiveSystemClock, 1000);
    initiateWorkspaceDragCapabilities();
    trackCursorTelemetry();
});

// 2. Custom Cursor Vector Tracking Pipeline
function trackCursorTelemetry() {
    const cursorDot = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });
}

// 3. Operational Windows Controls Pipeline Infrastructure
let currentLayerZIndex = 100;

function openWindow(windowID) {
    const targetWin = document.getElementById(windowID);
    if (!targetWin) return;
    
    targetWin.classList.remove('hidden');
    currentLayerZIndex++;
    targetWin.style.zindex = currentLayerZIndex;
    
    rebuildTaskbarStatusIndicators();
}

function closeWindow(windowID) {
    const targetWin = document.getElementById(windowID);
    if (targetWin) targetWin.classList.add('hidden');
    rebuildTaskbarStatusIndicators();
}

function minimizeWindow(windowID) {
    closeWindow(windowID); // Minimize routes direct to workspace tray state management structures
}

function maximizeWindow(windowID) {
    const targetWin = document.getElementById(windowID);
    if (targetWin) targetWin.classList.toggle('maximized');
}

// 4. Global Structural Drag Configuration Utilities (Draggable Frameworks from scratch)
function initiateWorkspaceDragCapabilities() {
    const windowInstances = document.querySelectorAll('.window');
    windowInstances.forEach(targetWindow => {
        const structuralHeader = targetWindow.querySelector('.window-header');
        let shiftX = 0, shiftY = 0, coordX = 0, coordY = 0;

        structuralHeader.onmousedown = (e) => {
            if (targetWindow.classList.contains('maximized')) return;
            e = e || window.event;
            e.preventDefault();
            currentLayerZIndex++;
            targetWindow.style.zIndex = currentLayerZIndex;
            
            coordX = e.clientX;
            coordY = e.clientY;
            document.onmouseup = terminateWorkspaceDrag;
            document.onmousemove = executeElementDrag;
        };

        function executeElementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            shiftX = coordX - e.clientX;
            shiftY = coordY - e.clientY;
            coordX = e.clientX;
            coordY = e.clientY;
            targetWindow.style.top = (targetWindow.offsetTop - shiftY) + "px";
            targetWindow.style.left = (targetWindow.offsetLeft - shiftX) + "px";
        }

        function terminateWorkspaceDrag() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    });
}

// 5. Dynamic Taskbar Interface Elements Builders
function rebuildTaskbarStatusIndicators() {
    const activeTasksPanel = document.getElementById('active-tasks');
    activeTasksPanel.innerHTML = '';
    
    const visibleWindows = document.querySelectorAll('.window:not(.hidden)');
    visibleWindows.forEach(elementWin => {
        const visualTitle = elementWin.querySelector('.window-title').innerHTML;
        const linkedID = elementWin.getAttribute('id');
        
        const runtimeTab = document.createElement('div');
        runtimeTab.className = 'task-tab active';
        runtimeTab.innerHTML = visualTitle;
        runtimeTab.onclick = () => {
            currentLayerZIndex++;
            elementWin.style.zIndex = currentLayerZIndex;
        };
        activeTasksPanel.appendChild(runtimeTab);
    });
}

function toggleMenu() {
    document.getElementById('start-menu').classList.toggle('hidden');
}

function updateLiveSystemClock() {
    const clockElement = document.getElementById('live-clock');
    const localTime = new Date();
    clockElement.innerText = localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}