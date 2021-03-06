function colorMode() {
    document.body.classList.toggle('darkMode');

    const element = document.getElementById('colorMode');
    const body = document.getElementById('mainBody');
    const bgColor = window.getComputedStyle(body);
    if (bgColor.getPropertyValue('background-color').toString() === 'rgb(250, 235, 215)') {
        element.innerHTML = 'Light Mode';
    } else {
        element.innerHTML = 'Dark Mode';
    }
    localStorage.setItem('colorMode', bgColor.getPropertyValue('background-color').toString() === 'rgb(250, 235, 215)');
}

function pageLoad() {
    console.log(Navigator.connection)
    if (localStorage.getItem('colorMode') == null) {
        const body = document.getElementById('mainBody');
        const bgColor = window.getComputedStyle(body);
        localStorage.setItem('colorMode', bgColor.getPropertyValue('background-color').toString() === 'rgb(250, 235, 215)');
    } else if (localStorage.getItem('colorMode') == 'true') {
        return;
    } else if (localStorage.getItem('colorMode') == 'false') {
        document.body.classList.toggle('darkMode');

        const element = document.getElementById('colorMode');
        element.innerHTML = 'Dark Mode';
    }
}

function projectCreate() {
    const element = document.getElementById('workspaceMain');
    element.style.visibility = 'visible';
    const tools = document.getElementById('workInfo');
    tools.style.visibility = 'visible';
    const button = document.getElementById('projectCreate');
    button.style.visibility = 'hidden';
}

function openCloseList() {
    const dropdown = document.getElementById('cmdList');
    dropdown.classList.toggle("show");
}