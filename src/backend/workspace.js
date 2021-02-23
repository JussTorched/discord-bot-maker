function colorMode() {
    document.body.classList.toggle('darkMode');
    const element = document.getElementById('colorMode');
    const body = document.getElementById('mainBody');
    const bgColor = window.getComputedStyle(body);

    if (bgColor.getPropertyValue('background-color') === 'rgb(77, 76, 75)') {
        element.innerHTML = 'Dark Mode';
    } else {
        element.innerHTML = 'Light Mode';
    }
}

onpageshow()