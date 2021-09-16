const section = document.querySelector('section')
const colorCode = document.querySelector('h3 span')
function colorPicker() {
    let color = '#' + Math.random().toString(16).slice(2, 8);
    section.style.backgroundColor = color;

    colorCode.innerText = color;

}